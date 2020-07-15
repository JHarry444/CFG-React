import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import FuncForm from './FuncForm';
import Routing from './Routing';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Routing} />
        <Route path="/weapon" component={FuncForm} />
      </Switch>
    </Router>
  );
}

export default App;
