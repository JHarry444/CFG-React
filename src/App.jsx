import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Heroes from './Heroes';
import HeroDetails from './HeroDetails';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Heroes} />
        <Route path='/hero/:name' component={HeroDetails} />
      </Switch>
    </Router>
  );
}

export default App;
