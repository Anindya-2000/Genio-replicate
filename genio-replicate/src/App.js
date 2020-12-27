import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home.js';
import TnC from './TnC.js';
import Privacy from './Privacy.js';
import Verify from './Verify';

const App = () =>{
  return (
    <Router>
      <Switch>
        <Route exact path="/privacy">
          <Privacy />
        </Route>
        <Route exact path="/tnc">
          <TnC />
        </Route>
        <Route path="/verify/:id">
          <Verify />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;