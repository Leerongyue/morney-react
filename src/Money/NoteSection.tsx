import React from 'react';
import Input from '../components/Input';


type Props = {
  value: string,
  onChange: (note: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
  // const note = props.value;
  return (
    // <Wrapper>
    //   <label>
    //     <span>备注</span>
    //     <input
    //       type="text"
    //       placeholder={'在这里添加备注'}
    //       value={note}
    //       onChange={(e) => props.onChange(e.target.value)}
    //     />
    //   </label>
    // </Wrapper>
    <Input note={props.value} change={props.onChange}></Input>
  );
};
export {NoteSection};