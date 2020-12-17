import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { handleDeauth } from '../../redux-config';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(
    () => dispatch(handleDeauth()),
    [],
  );

  return <Redirect to="/login" />;
};

export default Logout;
