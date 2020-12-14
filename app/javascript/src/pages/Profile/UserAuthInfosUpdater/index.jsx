/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';

import {
  Formik, Field, ErrorMessage, Form,
} from 'formik';
import {
  FormGroup, Button, Row, Col,
} from 'react-bootstrap';

import { accountUpdate } from '../../../api/api-manager';
import CurrentUserContext from '../context';

const UserAuthInfosUpdater = () => {
  const { currentUser } = useContext(CurrentUserContext);

  console.log('update');

  const [alert, setAlert] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleOnInput = () => setAlert(null);
  const handleSubmit = (values) => {
    accountUpdate('signup', {
      data: {
        user: values,
      },
      onErrors: (errors) => console.log(errors),
      onSuccess: () => {
        setUpdateSuccess(true);
        setTimeout(
          () => setUpdateSuccess(false),
          3000,
        );
      },
    });
  };

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <Formik
          initialValues={{
            email: currentUser?.email, password: '', password_confirmation: '', current_password: '',
          }}
          validate={(values) => {
            const formErrors = {};

            if (!values.email) {
              formErrors.email = 'Obligatoire';
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

            if (!values.password_confirmation) {
              formErrors.password_confirmation = 'Obligatoire';
            } else if (values.password_confirmation.length < 6) {
              formErrors.password_confirmation = 'Doit avoir 6 caractères ou plus';
            }

            if (values.password !== values.password_confirmation) {
              formErrors.password_confirmation = 'Ne correspond pas au champ mot de passe';
            }

            if (!values.current_password) {
              formErrors.current_password = 'Obligatoire';
            } else if (values.current_password.length < 6) {
              formErrors.current_password = 'Doit avoir 6 caractères ou plus';
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
              { updateSuccess && (<div className="alert alert-success">Informations mis à jour avec succès</div>) }
              { alert && alert.error && (<div className="alert alert-danger">{ alert.error }</div>) }
              <FormGroup>
                <Field name="email" type="email" placeholder="Email" className="form-control" />
                <ErrorMessage name="email" component="div" className="text-danger" />
                { alert?.errors && alert.errors.email && (<div className="text-danger">{alert.errors.email.join(', ')}</div>) }
              </FormGroup>

              <FormGroup>
                <Field name="password" type="password" placeholder="Mot de passe" className="form-control" />
                <ErrorMessage name="password" component="div" className="text-danger" />
                { alert?.errors && alert.errors.password && (<div className="text-danger">{alert.errors.password.join(', ')}</div>) }
              </FormGroup>

              <FormGroup>
                <Field name="password_confirmation" type="password" placeholder="Confirmation de mot de passe" className="form-control" />
                <ErrorMessage name="password_confirmation" component="div" className="text-danger" />
                { alert?.errors && alert.errors.password && (<div className="text-danger">{alert.errors.password.join(', ')}</div>) }
              </FormGroup>

              <FormGroup>
                <Field name="current_password" type="password" placeholder="Mot de passe actuel" className="form-control" />
                <ErrorMessage name="current_password" component="div" className="text-danger" />
                { alert?.errors && alert.errors.password && (<div className="text-danger">{alert.errors.password.join(', ')}</div>) }
              </FormGroup>

              <FormGroup className="text-center">
                <Button type="submit" variant="primary" size="sm" disabled={isSubmitting}>
                  Mettre à jour
                </Button>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  );
};

export default UserAuthInfosUpdater;
