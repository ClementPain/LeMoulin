/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card, FormGroup, Button } from 'react-bootstrap';
import {
  Formik, Field, ErrorMessage, Form,
} from 'formik';

const UserAuthInfos = () => {
  const [alert, setAlert] = useState(null);
  const handleOnInput = () => setAlert(null);

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Card>
      <Card.Body>
        <Formik
          initialValues={{ email: '', password: '', passwordConfirmation: '' }}
          validate={(values) => {
            const formErrors = {};

            if (!values.email) {
              formErrors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              formErrors.email = 'Invalid email address';
            }

            if (!values.password) {
              formErrors.password = 'Required';
            } else if (values.password.length < 6) {
              formErrors.password = 'Must be 6 characters or more';
            }

            if (!values.passwordConfirmation) {
              formErrors.passwordConfirmation = 'Required';
            } else if (values.passwordConfirmation.length < 6) {
              formErrors.passwordConfirmation = 'Must be 6 characters or more';
            }

            if (!values.currentPassword) {
              formErrors.currentPassword = 'Required';
            } else if (values.currentPassword.length < 6) {
              formErrors.currentPassword = 'Must be 6 characters or more';
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
              <FormGroup>
                <Field name="email" type="email" placeholder="Email" className="form-control" />
                <ErrorMessage name="email" component="div" className="alert alert-danger" />
                { alert?.errors && alert.errors.email && (<div className="alert alert-danger">{alert.errors.email.join(', ')}</div>) }
              </FormGroup>

              <FormGroup>
                <Field name="password" type="password" placeholder="Mot de passe" className="form-control" />
                <ErrorMessage name="password" component="div" className="alert alert-danger" />
                { alert?.errors && alert.errors.password && (<div className="alert alert-danger">{alert.errors.password.join(', ')}</div>) }
              </FormGroup>

              <FormGroup>
                <Field name="passwordConfirmation" type="password" placeholder="Confirmation de mot de passe" className="form-control" />
                <ErrorMessage name="passwordConfirmation" component="div" className="alert alert-danger" />
                { alert?.errors && alert.errors.password && (<div className="alert alert-danger">{alert.errors.password.join(', ')}</div>) }
              </FormGroup>

              <FormGroup>
                <Field name="currentPassword" type="password" placeholder="Mot de passe actuel" className="form-control" />
                <ErrorMessage name="currentPassword" component="div" className="alert alert-danger" />
                { alert?.errors && alert.errors.password && (<div className="alert alert-danger">{alert.errors.password.join(', ')}</div>) }
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

  );
};

export default UserAuthInfos;
