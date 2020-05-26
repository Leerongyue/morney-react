import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
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
type Props = {
  note?: string,
  change: (s:string) => void
}

const Input: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder={'在这里添加备注'}
          value={props.note}
          onChange={(e) =>  props.change(e.target.value)}
        />
      </label>
    </Wrapper>
  );
};
export default Input;