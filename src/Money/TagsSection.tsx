import styled from 'styled-components';
import React, {useState} from 'react';
import {Button, MessageBox} from 'element-react';
import 'element-theme-default';
import 'index..scss';


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

const TagsSection: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const onAddTag = () => {
    MessageBox.prompt('请输入标签名', '提示', {
      inputPattern: /^[a-zA-Z\u4e00-\u9fa5]+$/,
      inputErrorMessage: '请输入中文或英文',
    }).then((tag: any) => {
      setTags([...tags, tag.value]);
      // window.scroll(0,100)
      // Message({
      //   type: 'success',
      //   message: ''
      // });
    }).catch(() => {
    });
  };
  const onSelectTag = (tag: string) => {
    const index = selectedTag.indexOf(tag);
    if (index >= 0) {
      // selectedTag.splice(index, 1);
      // setSelectedTag ([...selectedTag])
      setSelectedTag([]);
    } else {
      // setSelectedTag([...selectedTag,tag]);
      setSelectedTag([tag]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li className={selectedTag.indexOf(tag) >= 0 ? 'xxx' : ''} onClick={() => {onSelectTag(tag);}}
                             key={tag}>{tag}</li>)}
      </ol>
      <Button type="text" onClick={onAddTag}>添加标签</Button>
    </Wrapper>
  );
};

export {TagsSection};