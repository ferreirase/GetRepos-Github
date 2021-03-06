import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Repository from './Pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/repository/:repository" component={Repository} />
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
