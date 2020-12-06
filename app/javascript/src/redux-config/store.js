import {
  createStore, compose, applyMiddleware
} from 'redux';
import middleware from 'redux-thunk';

import authReducer from './auth/authReducer';

const store = createStore(
  authReducer,
  compose(
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
