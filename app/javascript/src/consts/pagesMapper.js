import React from 'react';

import Register from '../pages/Register';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Home from '../pages/Home';
import ShopsList from '../pages/ShopsList'

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
  shopslist: {
    label: 'ShopsList',
    page: <ShopsList />
  },
  shop: {
    label: 'Shop show',
    page: <div >Shop</div>
  }
};

export default pagesMap;