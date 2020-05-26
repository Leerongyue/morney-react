import React from 'react';
import './index..scss';
import {
  Redirect,
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';
import {EditTag} from './views/Tags/EditTag';


function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/money"/>
        <Route exact path="/statistics">
          <Statistics/>
        </Route>
        <Route exact path="/tags/:id">
          <EditTag/>
        </Route>
        <Route exact path="/money">
          <Money/>
        </Route>
        <Route exact path="/tags">
          <Tags/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );

}


export default App;
