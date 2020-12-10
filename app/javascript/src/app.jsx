import React from 'react';
import './vendor/bootstrap.min.css';

import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import TheMill from './pages/TheMill';
import store from './redux-config';

const App = () => (
  <Router>
    <Provider store={store}>
      <TheMill />
    </Provider>
  </Router>
);

export default App;
