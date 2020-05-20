import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.div`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
    >ul{
     display: flex;
     justify-content: space-around;
       >li{
          padding:4px 0;
          line-height: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
           >svg{
           width:24px;
           height:24px;
           }
       }
    }`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name={'tag'}/>
          <Link to="/tags">Tags</Link>
        </li>
        <li>
          <Icon name={'money'}/>
          <Link to="/money">Money</Link>
        </li>
        <li>
          <Icon name={'statistics'}/>
          <Link to="/statistics">Statistics</Link>
        </li>
      </ul>
    </NavWrapper>

  );
};
export default Nav;

