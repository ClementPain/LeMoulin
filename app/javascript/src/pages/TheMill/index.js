import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Routes from '../../routes';
import Navbar from '../../components/Navbar';
import { authCookieHandler } from '../../tools';
import { authSuccess } from '../../redux-config';

const { getAuthCookie } = authCookieHandler;

const TheMill = () => {
  const dispatch = useDispatch();

  const authUserIfAuthCookieExist = () => {
    const authCookie = getAuthCookie();
    if (authCookie) { dispatch(authSuccess(authCookie.currentUserId)); }
  };
  
  useEffect(
    () => { authUserIfAuthCookieExist(); },
    [],
    );
    
  return (
    <div className="container-fluid">
      <Navbar />
      <Routes />
    </div>
  )
}

export default TheMill;
