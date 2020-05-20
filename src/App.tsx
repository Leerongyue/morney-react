import React from 'react';
import './index..scss';
import {
  Redirect,
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height:100vh;
`;
const Main = styled.div`
flex-grow:1;
overflow: auto;
`;


function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Redirect exact from="/" to="/money"/>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/tags">
              <Tags/>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Main>
        <Nav>
          <ul>
            <li>
              <Link to="/tags">Tags</Link>
            </li>
            <li>
              <Link to="/money">Money</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  );

}

function NoMatch() {
  return <h2>
    页面不存在
  </h2>;
}

function Tags() {
  return <h2>Tags</h2>;
}

function Statistics() {
  return <h2>Statistics</h2>;
}

function Money() {
  return <h2>Money</h2>;
}

export default App;
