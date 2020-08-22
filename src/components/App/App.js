import React from 'react';
import './App.css';
import Home from '../Home/Home';
import Exercise from '../Exercise/Exercise';
import About from '../About/About';
import Splash from './Splash';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/../Exercise">Exercise</Link>
      <Link to="/../About">About</Link>
      <Switch>
        <Route component={ Home } exact path="/" />
        <Route component={ Exercise } path="/../Exercise" />
        <Route component={ About } path="/../About" />
      </Switch>
    </div>
  );
}

export default App;
