import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from '../Money/CategorySection';
import {NoteSection} from '../Money/NoteSection';
import {NumberPadSection} from '../Money/NumberPadSection';
import {TagsSection} from '../Money/TagsSection';
import useRecord from '../hooks/useRecord';
import {createId} from '../lib/createId';


const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;

type Category = '-' | '+'
type Tag = {
  id: number;
  name: string
}
const defaultValue = {
  tags: [] as Tag[],
  note: '',
  category: '-' as Category,
  amount: '0'
};

function Money() {
  const [selected, setSelected] = useState(defaultValue);
  // console.log(selected);
  const {addRecord, warning, success} = useRecord();
  const onChange = (obj: Partial<typeof selected>) => {
    // console.log(1);
    setSelected({
      ...selected,
      ...obj
    });
  };

  const submit = () => {
    if (!(selected.tags[0])) {
      warning(() => '请输入标签');
      return;
    } else if (selected.amount === '0') {
      warning(() => '请输入金额');
    } else {
      selected.tags[0] && addRecord({...selected, tags: [{id: createId() - 4, name: selected.tags[0].name}]});
      success();
      setSelected(defaultValue);
    }
  };
  return (
    <MyLayout>
      {/*{JSON.stringify(records)}*/}
      {/*{JSON.stringify(selected)}*/}
      <TagsSection
        value={[selected.tags[0] ? selected.tags[0].id : 0]}
        onChange={(tags) => onChange({tags})}
      />
      <NoteSection
        value={selected.note}
        onChange={(note) => onChange({note})}
      />
      <CategorySection
        value={selected.category}
        onChange={(category) => onChange({category})}
      />
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({amount})}
        onOk={submit}
      />
    </MyLayout>
  );
}

export default Money;