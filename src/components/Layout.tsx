import Nav from './Nav';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import 'helper.scss';

const Wrapper = styled.div`
height:100vh;
display: flex;
flex-direction: column;
`;
const Main = styled.div`
flex-grow: 1;
display: flex;
flex-direction: column;
overflow: auto;
::-webkit-scrollbar{
display:none;
}
`;

type Props = {
  className?: string,
  scrollTop?: number
}
const Layout: React.FC<Props> = (props) => {
  const h2Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!h2Ref.current) return;
      h2Ref.current.scrollTop = props.scrollTop!;

    }, 0);
  }, [props.scrollTop]);
  return (
    <Wrapper >
      <Main ref={h2Ref} className={props.className} data-x={'xxx'}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};
Layout.defaultProps = {
  scrollTop: 0
};

export default Layout;