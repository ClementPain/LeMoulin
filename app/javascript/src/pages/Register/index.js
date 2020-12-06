import React from 'react';
import Auth from '../Auth';

const Register = () => (
  <Auth type="signup">
    <div className="form-group row">
      <label htmlFor="email" className="col-md-5 text-md-right">
        Email
      </label>
      <input type="text" placeholder="Enter an email" name="email" />
    </div>
    <div className="form-group row">
      <label htmlFor="password" className="col-md-5 text-md-right">
        Password
      </label>
      <input type="password" placeholder="Enter a password" name="password" />
    </div>
  </Auth>
  
);

export default Register;


