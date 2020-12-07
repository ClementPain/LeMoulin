import React from 'react';
import Auth from '../Auth';

const Login = () => (
  <Auth type="login">
    <div className="form-group row">
      <label htmlFor="email" className="text-md-right">
        Email
      </label>
      <input type="text" placeholder="Enter your email"className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
    </div>
    <div className="form-group row">
      <label htmlFor="password" className="text-md-right">
        Password
      </label>
      <input type="password" placeholder="Enter your password" className="form-control" id="exampleInputPassword1" name="password" />
    </div>
  </Auth>
);

export default Login;