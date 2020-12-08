import React from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css'; 
// import './custom.scss';

import {
  BrowserRouter as Router
} from "react-router-dom";
import { Provider } from 'react-redux';

import TheMill from './pages/TheMill';
import store from './redux-config'

const App = () => (
  <Router>
    <Provider store={store}>
      <TheMill />
    </Provider>
  </Router>
)

export default App;
