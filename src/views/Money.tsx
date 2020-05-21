import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
padding:0 16px;
background: #FFFFFF;
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
background:#f5f5f5;
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
const CategorySection = styled.section`
>ul{
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 background: #C4C4C4;
 position: relative;
  >li{
  font-size: 24px;
  font-family: Source Han Sans;
  padding:18px 0;
  &.selected::after{
  content: '';
  display: block;
  background:#000;
  height:4px;
  width:50%;
  position: absolute;
  left: 0;
  bottom: 0;
 }
 }
}


`;
const NumberPadSection = styled.section`
>.output{
  font-size: 36px;
  line-height: 72px;
  text-align: right;
  padding-right: 16px;
  background: #FFFFFF;
  box-shadow: inset 0px -5px 5px -5px rgba(0,0,0,0.25),
              inset 0px 5px 5px -5px rgba(0,0,0,0.25);
}
>.pad{
  >button{
  float: left;
    margin:0;
    padding:0;
    font-size: 18px;
    width:20%;
    height:64px;
    border:none;
    &.ok{
    float: right;
    height:128px;
    }
    &:nth-child(1){
    background: #F2F2F2;
    }
    &:nth-child(2),:nth-child(6){
    background: #E0E0E0;
    }
    &:nth-child(3),:nth-child(7),:nth-child(11){
    background: #D3D3D3;
    }
    &:nth-child(4),:nth-child(8),:nth-child(12),:nth-child(16){
    background: #C1C1C1;
    }
    &:nth-child(5),:nth-child(9),:nth-child(13),:nth-child(17){
    background: #B8B8B8;
    }
    &:nth-child(10),:nth-child(14),:nth-child(18){
    background: #A9A9A9;
    }
    &:nth-child(15){
    background: #8B8B8B;
    }
    &:nth-child(19){
    background: #9A9A9A;
    }
  }
  
}

`;

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
          <li className={'selected'}>收入</li>
          <li>支出</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className="output">
          100
        </div>
        <div className={'pad clearFix'}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>x</button>
          <button className={'ok'}>ok</button>
          <button>.</button>
          <button>0</button>
          <button>=</button>
          <button>÷</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;