import React from 'react';
import {
  Redirect,
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// import styled from 'styled-components';

function App() {
  return (
    <Router>
      <div>
        <Switch >
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
        <nav>
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
        </nav>
      </div>
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
