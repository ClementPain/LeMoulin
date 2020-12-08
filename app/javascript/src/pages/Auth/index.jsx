import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { handleAuth } from '../../redux-config';

const endpoints = {
  signup: '/signup',
  login: '/login',
}

const Auth = ({ children, type }) => {
  const { isAuthenticated, errors } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [alert, setAlert] = useState(null);

  const handleSubmit = (values) => {
    

    if (inputsErrors.length) setAlert((`You must provide ${inputsErrors.join(' and ')}.`));
    else {
      setAlert(null);
      dispatch(handleAuth(endpoints[type], identifiers));
    }
  };

  useEffect(
    () => {
      setAlert(errors);
    },
    [errors],
  );

  const handleOnInput = () => setAlert(null);

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <nav className="login-form mt-5 mb-4  ml-5 justify-content-center">
      <div className="container">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary">
              <h5 className="text-white text-center">{type.toUpperCase()}</h5>
            </div>
            <div className="card-body">
              <Formik
                initialValues={{ email: '', password: '' }}
                validate={(values) => {
                  const errors = {};
                  
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  
                  if (!values.password) {
                    errors.password = 'Required';
                  } else if (values.password < 6) {
                    errors.password = 'Must be 6 characters or more'
                  }

                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ isSubmitting }) => (
                  <div className="container">
                    <Form>
                      <div className="form-group row">
                        <label htmlFor="email" className="text-md-right">
                          Email
                        </label>
                        <Field name="email" type="email" placeholder="Enter email"className="form-control" />
                        <ErrorMessage name="email" component="div" className="alert alert-danger" /> 
                      </div>
                      <div className="form-group row">
                        <label htmlFor="password" className="text-md-right">
                          Password
                        </label>
                        <Field name="password" type="password" placeholder="Enter password" className="form-control" />
                        <ErrorMessage name="password" component="div" className="alert alert-danger"/> 
                      </div>
                      <div className="form-group text-center">
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary mx-5">
                          Submit
                        </button>
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Auth;
