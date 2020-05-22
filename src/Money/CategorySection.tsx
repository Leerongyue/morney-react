import styled from 'styled-components';

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
export {CategorySection}