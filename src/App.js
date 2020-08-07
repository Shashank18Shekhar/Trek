import React from 'react';
import './App.css';
import Home from './Components/Home'
import { Route, Switch } from 'react-router-dom';
import Departure from './Components/Departure'
import Adventure from './Components/Adventure'
import Contact from './Components/Contact'


function App() {
  return (
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Departure" component={Departure} />
    <Route exact path="/Adventure" component={Adventure} />
    <Route exact path="/Contact" component={Contact} />
  </Switch>
  );
}

export default App;
