import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";

import PageContainer from './pages/PageContainer'; 

const Routes = () => (
  <Switch>
    <Route exact path="/" component={PageContainer} />
    <Route path='/:slug' component={PageContainer} />
  </Switch>
)

export default Routes;
