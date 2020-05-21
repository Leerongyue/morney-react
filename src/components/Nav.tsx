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
             >a{
                display: flex;
                flex-direction: column;
                 align-items: center;
                   >svg{
                       width:24px;
                       height:24px;
                   }
             }
       }
  }`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">
            <Icon name={'tag'}/>
            标签
          </Link>
        </li>
        <li>
          <Link to="/money">
            <Icon name={'money'}/>
            记账
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name={'statistics'}/>
            统计
          </Link>
        </li>
      </ul>
    </NavWrapper>

  );
};
export default Nav;

