import styled from 'styled-components';
import React from 'react';

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
  value: string,
  onChange: (note: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder={'在这里添加备注'}
          value={note}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </label>
    </Wrapper>
  );
};
export {NoteSection};