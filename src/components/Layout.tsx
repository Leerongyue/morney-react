import Nav from './Nav';
import React from 'react';
import styled from 'styled-components';
import 'helper.scss';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height:100vh;
>h2{
font-weight: normal;
font-size:inherit ;
flex-grow:1;
overflow: auto;
}
`;
const Layout = (props: any) => {
  return (
    <Wrapper>
      <h2 className={props.className}>{props.children}</h2>
      <Nav/>
    </Wrapper>
  );
};

export default Layout;