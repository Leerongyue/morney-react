import styled from 'styled-components';
import React from 'react';
import 'element-theme-default';
import 'index..scss';
import {useTags} from '../components/useTags';


const Wrapper = styled.section`
background: #FFFFFF;
padding-left: 16px;
//display: flex;
//flex-direction: column;
//align-items: flex-start;
//justify-content: flex-end;
flex-grow: 1;

>.button{
  display: inline;
  background:none;
  border:none;
  border-bottom: 1px solid #666;
  color: #999999;
  font-size: 14px;
  padding:0px 4px;
  margin: 14px 0;
  }
>ol{
    >li{
      background: #D9D9D9;
      display: inline-block;
      border-radius: 18px;
      padding:3px 16px;
      margin-right: 24px;
      margin-top:18px ;
      font-size: 14px;
      text-align: center;  
      &.xxx{
      background:#f60;
      }
    }
  }
`;

type Tag = {
  id: number,
  name: string
}
type Props = {
  value: number[],
  onChange: (selected: Tag[]) => void
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const selectedTag = props.value;

  const onSelectTag = (tag: { id: number, name: string }) => {
    const index = selectedTag.indexOf(tag.id);
    if (index >= 0) {
      // selectedTag.splice(index, 1);
      // setSelectedTag ([...selectedTag])
      props.onChange([]);
    } else {
      // setSelectedTag([...selectedTag,tag]);
      props.onChange([tag]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li className={selectedTag.indexOf(tag.id) >= 0 ? 'xxx' : ''}
                             onClick={() => {onSelectTag(tag);}}
                             key={tag.id}>{tag.name}</li>)}
      </ol>
      <button className={'button'} onClick={() => {addTag();}}> 添加标签</button>
    </Wrapper>
  );
};

export {TagsSection};