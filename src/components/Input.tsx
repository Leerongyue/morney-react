import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
>label{
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
>span{
  white-space: nowrap;
  margin-left: 16px; 
  margin-right: 16px;
 }
  >input{
  font-size: 16px;
  height:44px;
  width:100%; 
  background:none;
  border: none;
  }
}
`;
type Props = {
  label: string,
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
  const {label,children, ...rest} = props;
  return (
    <Wrapper>
      <label>
        <span>{label}</span>
        <input {...rest}></input>
      </label>
    </Wrapper>
  );
};
export default Input;