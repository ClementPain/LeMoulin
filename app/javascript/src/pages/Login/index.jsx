import React from 'react';
import Auth from '../Auth';
import { Field, ErrorMessage } from 'formik';

const Login = () => (
  <Auth type="login">
    <div className="form-group row">
      <label htmlFor="email" className="text-md-right">
        Email
      </label>
      <Field name="email" type="email" placeholder="Enter your email"className="form-control" />
      <ErrorMessage name="email" component="div" className="alert alert-danger" /> 
    </div>
    <div className="form-group row">
      <label htmlFor="password" className="text-md-right">
        Password
      </label>
      <Field name="password" type="password" placeholder="Enter your password" className="form-control" />
      <ErrorMessage name="password" component="div" className="alert alert-danger"/> 
    </div>
  </Auth>
);

export default Login;