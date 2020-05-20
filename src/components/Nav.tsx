import styled from 'styled-components';

const Nav = styled.div`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
>ul{
display: flex;
justify-content: space-around;
>li{
padding:16px 0;
line-height: 24px;
}
}
`;
export default Nav;

