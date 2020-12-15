/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Formik, Form,
} from 'formik';
import {
  Container, Row, Col, Card, FormGroup, Button,
} from 'react-bootstrap';

import { handleAuth, eraseErrors } from '../../redux-config';
import { MyTextInput, MySelect } from '../../tools/formik-manager';
import validate from './config/validate';

const endpoints = {
  inscription: 'signup',
  connexion: 'login',
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

  const initialValues = { email: '', password: '' };

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
                initialValues={initialValues}
                validate={validate}
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
                      placeholder="Entrez l'email"
                      alert={alert?.errors}
                    />

                    <MyTextInput
                      label="Mot de passe"
                      name="password"
                      type="password"
                      placeholder="Entrez le mot de passe"
                      alert={alert?.errors}
                    />

                    <FormGroup className="text-center">
                      <Button variant="outline-success" type="submit" disabled={isSubmitting}>
                        Valider
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
