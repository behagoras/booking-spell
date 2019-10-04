import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Experience from '../containers/Experience';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Experience} />
    </Switch>
  </BrowserRouter>
);

export default App;
