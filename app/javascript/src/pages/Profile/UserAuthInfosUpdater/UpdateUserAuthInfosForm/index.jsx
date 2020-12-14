import React, { useContext, useState } from 'react';

import {
  Formik, Form,
} from 'formik';
import { FormGroup, Button } from 'react-bootstrap';

import CurrentUserContext from '../../context';
import { accountUpdate } from '../../../../api/api-manager';
import { MyTextInput } from '../../../../tools/formik-manager';
import validate from './config/validate';

const UpdateUserAuthInfosForm = () => {
  const { currentUser } = useContext(CurrentUserContext);

  const [alert, setAlert] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleOnInput = () => setAlert(null);
  const handleSubmit = (values) => {
    accountUpdate('signup', {
      data: {
        user: values,
      },
      onErrors: (errors) => setAlert(errors),
      onSuccess: () => {
        setUpdateSuccess(true);
        setTimeout(
          () => setUpdateSuccess(false),
          3000,
        );
      },
    });
  };

  const initialValues = {
    email: currentUser ? currentUser.email : '',
    password: '',
    password_confirmation: '',
    current_password: '',
  };

  return (
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
          { updateSuccess && (<div className="alert alert-success">Informations mis à jour avec succès</div>) }
          <MyTextInput
            name="email"
            type="email"
            placeholder="Email"
            alert={alert}
          />

          <MyTextInput
            name="password"
            type="password"
            placeholder="Mot de passe"
            alert={alert}
          />

          <MyTextInput
            name="password_confirmation"
            type="password"
            placeholder="Confirmation de mot de passe"
            alert={alert}
          />

          <MyTextInput
            name="current_password"
            type="password"
            placeholder="Mot de passe actuel"
            alert={alert}
          />

          <FormGroup className="text-center">
            <Button type="submit" variant="primary" size="sm" disabled={isSubmitting}>
              Mettre à jour
            </Button>
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateUserAuthInfosForm;
