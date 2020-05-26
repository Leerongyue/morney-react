import styled from 'styled-components';
import React from 'react';
import {Button, MessageBox} from 'element-react';
import 'element-theme-default';
import 'index..scss';
import {useTags} from './useTags';
import {createId} from '../lib/createId';


const Wrapper = styled.section`
padding:0 16px;
background: #FFFFFF;
flex-grow: 1;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
  
  >Button{
  background:none;
  border:none;
  border-bottom: 1px solid #666;
  color: #999999;
  font-size: 14px;
  padding:0 4px;
  margin-bottom: 12px;
  margin-top:18px ;
  border-radius: 0;
  outline: none;
  }
    >ol{
      >li{
        display: inline-block;
        background: #D9D9D9;
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
  onChange: (selected:Tag[]) => void
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTag = props.value;
  const onAddTag = () => {
    MessageBox.prompt('请输入标签名', '提示', {
      inputPattern: /^[a-zA-Z\u4e00-\u9fa5]+$/,
      inputErrorMessage: '请输入中文或英文',
    }).then((input: any) => {
      setTags([...tags, {id: createId(), name: input.value}]);
      // window.scroll(0,100)
      // Message({
      //   type: 'success',
      //   message: ''
      // });
    }).catch(() => {
    });
  };
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
      <Button type="text" onClick={onAddTag}>添加标签</Button>
    </Wrapper>
  );
};

export {TagsSection};