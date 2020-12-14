/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import {
  Container, Row, Col, Card, FormGroup, FormLabel, Button,
} from 'react-bootstrap';

import { handleAuth, eraseErrors } from '../../redux-config';
import { MyTextInput } from '../../tools/formik-manager';

const endpoints = {
  signup: 'signup',
  login: 'login',
};

const Auth = ({ type }) => {
  const { isAuthenticated, errors } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [alert, setAlert] = useState(null);

  const handleSubmit = (values) => {
    dispatch(handleAuth(endpoints[type], { user: values }));
  };

  const handleOnInput = () => setAlert(null);

  useEffect(
    () => dispatch(eraseErrors()),
    [],
  );

  useEffect(
    () => {
      setAlert(errors);
    },
    [errors],
  );

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Header className="bg-primary">
              <h5 className="text-white text-center">{type.toUpperCase()}</h5>
            </Card.Header>
            <Card.Body className="px-4">
              <Formik
                initialValues={{ email: '', password: '' }}
                validate={(values) => {
                  const formErrors = {};

                  if (!values.email) {
                    formErrors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    formErrors.email = 'Adresse email invalide';
                  }

                  if (!values.password) {
                    formErrors.password = 'Obligatoire';
                  } else if (values.password.length < 6) {
                    formErrors.password = 'Doit avoir 6 caractères ou plus';
                  }

                  return formErrors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(false);
                  handleSubmit(values);
                }}
              >
                {({ isSubmitting }) => (
                  <Form onInput={handleOnInput}>
                    { alert && alert.error && (<div className="alert alert-danger">{ alert.error }</div>) }
                    <MyTextInput
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      alert={alert?.errors}
                    />

                    <MyTextInput
                      name="password"
                      type="password"
                      placeholder="Enter password"
                    />
                    <FormGroup>
                      <FormLabel htmlFor="password">
                        Password
                      </FormLabel>
                      <Field name="password" type="password" placeholder="Enter password" className="form-control" />
                      <ErrorMessage name="password" component="div" className="text-danger" />
                      { alert?.errors && alert.errors.password && (<div className="text-danger">{alert.errors.password.join(', ')}</div>) }
                    </FormGroup>

                    <FormGroup className="text-center">
                      <Button variant="primary" type="submit" disabled={isSubmitting}>
                        Submit
                      </Button>
                    </FormGroup>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
