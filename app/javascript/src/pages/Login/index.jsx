import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Alert } from 'react-bootstrap';
import Auth from '../Auth';

const Login = () => {
  const history = useHistory();
  const [alert, setAlert] = useState(history.location.state?.alertPrivateRoute ? history.location.state.alertPrivateRoute : false)

  useEffect( () => {
    window.setTimeout(()=>{
      setAlert(false)
    }, 2000)
  }, [])

  return (
  <>
    <Alert variant='danger' show={alert} >
      Veuillez vous connecter
    </Alert>
    <Auth type="connexion" />
  </>
  )
}

export default Login;
