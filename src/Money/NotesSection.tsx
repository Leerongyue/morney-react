import styled from 'styled-components';

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
export {NotesSection}