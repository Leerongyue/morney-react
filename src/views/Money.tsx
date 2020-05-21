import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
padding:0 16px;
background: #FFFFFF;
margin-right: -24px;
  >button{
  background:none;
  border:none;
  border-bottom: 1px solid #666;
  color: #999999;
  font-size: 14px;
  padding:0 4px;
  margin-bottom: 12px;
  margin-top:18px ;
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
      }
    }
`;
const NotesSection = styled.section`
>label{
display: flex;
align-items: center;
  >span{
  white-space: nowrap;
  margin-left: 16px; 
  margin-right: 16px;
  font-size: 14px;
 }
  input{
  height:72px;
  width:100%; 
  background:none;
  border: none;
  }
}
`;
const CategorySection = styled.section``;
const NumberPadSection = styled.section``;

function Money() {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>添加标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder={'在这里添加备注'}/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li>收入</li>
          <li>支出</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>ok</button>
        <button>0</button>
        <button>.</button>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;