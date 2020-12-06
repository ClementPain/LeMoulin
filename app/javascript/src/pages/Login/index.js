import React from 'react';
import Auth from '../Auth';

const Login = () => (
  <Auth type="login">
    <div className="form-group row">
      <label htmlFor="email" className="col-md-5 text-md-right">
        Email
      </label>
      <input type="text" placeholder="Enter your email" name="email" />
    </div>
    <div className="form-group row">
      <label htmlFor="password" className="col-md-5 text-md-right">
        Password
      </label>
      <input type="password" placeholder="Enter your password" name="password" />
    </div>
  </Auth>
);

export default Login;