import React from 'react';

import Register from '../pages/Register';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Home from '../pages/Home';

const pagesMap = {
  '': {
    label: 'Home',
    page: <Home />,
  },
  register: {
    label: 'Join us',
    page: <Register />,
  },
  login: {
  label: 'Login',
  page: <Login />,
  },
  logout: {
    label: 'Logout',
    page: <Logout />,
  },
};

export default pagesMap;