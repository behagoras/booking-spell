import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Experience from '../containers/Experience';
import Header from '../components/Header';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Experience} />
      <Route exact path='/header' component={Header} />
    </Switch>
  </BrowserRouter>
);

export default App;
