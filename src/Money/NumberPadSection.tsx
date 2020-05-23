import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
const NumberPadSection = () => {
  const [output, _setOutput] = useState('0');
  // const[x,setX]=useState(1)
  const setOutput = (str: string) => {
    if (str.length > 16) {
      str = str.slice(0, 16);
    }
    _setOutput(str);
  };
  const onclickButtonWrapper = (e: React.MouseEvent) => {
    //事件委托
    const text = (e.target as HTMLButtonElement).textContent;
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case '.':
        if (output.indexOf('.') >= 0) {
          return;
        }
        setOutput(output + text);
        break;
      case '删除':
        if (output.length === 1) {
          setOutput('0');
        } else {
          setOutput(output.slice(0, -1));
        }
        break;
      case '清空':
        setOutput('0');
        break;
      case 'ok':
        console.log(text);
        break;
      case '+':
        break;
      case '-':
        // setOutput(output + text);
        break;
      case '×':
        // setOutput(output + text);
        break;
      case '÷':
        // setOutput(output + text);
        break;
      case '=':
        console.log(text);
        break;
    }
  };
  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className={'pad clearFix'} onClick={onclickButtonWrapper}>
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
        <button>×</button>
        <button className={'ok'}>ok</button>
        <button>.</button>
        <button>0</button>
        <button>=</button>
        <button>÷</button>
      </div>
    </Wrapper>

  );
};
export {NumberPadSection};