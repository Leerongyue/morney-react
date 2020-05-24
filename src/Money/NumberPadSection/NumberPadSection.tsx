import styled from 'styled-components';

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
    width:25%;
    height:72px;
    border:none;
    &.ok{
    float: right;
    height:144px;
    }
    &:nth-child(1){
    background: #F2F2F2;
    }
    &:nth-child(2),:nth-child(5){
    background: #E0E0E0;
    }
    &:nth-child(3),:nth-child(6),:nth-child(9){
    background: #D3D3D3;
    }
    &:nth-child(4),:nth-child(7),:nth-child(10),:nth-child(13){
    background: #C1C1C1;
    }
    &:nth-child(8),:nth-child(11),:nth-child(14){
    background: #B8B8B8;
    }
    &:nth-child(15){
    background: #A9A9A9;
    }
    &:nth-child(12){
    background: #9A9A9A;
    }
  }
  
}

`;
export default Wrapper