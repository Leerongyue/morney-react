import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.div`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  background:white;
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
              &.selected{
              color:#f60;
              >svg{
                  fill:#f60;
                }
              }
             }
       }
  }`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name={'money'}/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name={'tag'}/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name={'statistics'}/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>

  );
};
export default Nav;

