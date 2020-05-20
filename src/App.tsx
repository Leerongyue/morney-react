import React from 'react';
import './index..scss';
import {
  Redirect,
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import styled from 'styled-components';
import Nav from './components/Nav';
import Layout from './components/Layout';



function App() {
  return (
    <Router>
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
    </Router>
  );

}

function NoMatch() {
  return (
    <h2>页面不存在</h2>
  );
}

function Tags() {
  return (
    <Layout>
      Tags
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      Statistics
    </Layout>
  );
}

function Money() {
  return (
    <Layout>Money
    </Layout>
  );
}

export default App;
