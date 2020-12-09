import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";

import PageContainer from './pages/PageContainer';

import ItemsList from './pages/ItemsList'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={PageContainer} />
    <Route path="/itemslist/search/:keyword" component={ItemsList} />
    <Route path='/:slug' component={PageContainer} />
  </Switch>
)

export default Routes;
