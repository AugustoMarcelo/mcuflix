import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateMovie from './pages/CreateMovie';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={CreateMovie} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
