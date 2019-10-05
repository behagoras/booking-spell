import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Experience from '../containers/Experience';
import Header from '../components/Header';
import ExpMainCard from '../components/ExpMainCard';
import Experiment from '../components/Experiment';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Experience} />
      <Route exact path='/header' component={Header} />
      <Route exact path='/ExpMainCard' component={ExpMainCard} />
      <Route exact path='/experiment' component={Experiment} />
    </Switch>
  </BrowserRouter>
);

export default App;
