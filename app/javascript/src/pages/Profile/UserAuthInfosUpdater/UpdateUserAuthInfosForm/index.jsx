import React, { useContext, useState, useEffect } from 'react';

import {
  Formik, Form,
} from 'formik';
import { FormGroup, Button, Card } from 'react-bootstrap';

import CurrentUserContext from '../../context';
import { accountUpdate } from '../../../../api/api-manager';
import { MyTextInput } from '../../../../tools/formik-manager';
import validate from './config/validate';

const UpdateUserAuthInfosForm = () => {
  const { currentUser, updateCurrentUser } = useContext(CurrentUserContext);

  const [alert, setAlert] = useState(null);
  const [updateSuccessFlag, setUpdateSuccessFlag] = useState(false);

  const handleOnInput = () => setAlert(null);
  const handleSubmit = (values, resetForm) => {
    accountUpdate('signup', {
      data: {
        user: values,
      },
      onErrors: (errors) => { setAlert(errors); },
      onSuccess: () => {
        updateCurrentUser((user) => resetForm({
          values:
          {
            ...user,
            current_password: '',
            password: '',
            password_confirmation: '',
          },
        }));
        setUpdateSuccessFlag(true);
        setTimeout(
          () => { setUpdateSuccessFlag(false); },
          3000,
        );
      },
    });
  };

  useEffect(
    updateCurrentUser,
    [],
  );

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
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        handleSubmit(values, resetForm);
      }}
    >
      {({ isSubmitting }) => (
        <Form onInput={handleOnInput}>
          <Card.Title>Modifier le mot de passe ou Email</Card.Title>
          { updateSuccessFlag && (<div className="alert alert-success">Informations mis à jour avec succès</div>) }
          <MyTextInput
            label="Email actuel"
            name="email"
            type="email"
            placeholder="Email"
            alert={alert}
          />

          <MyTextInput
            label="Mot de passe actuel"
            name="current_password"
            type="password"
            placeholder="Mot de passe actuel"
            alert={alert}
          />

          <MyTextInput
            label="Nouveau mot de passe"
            name="password"
            type="password"
            placeholder="Entrez un nouveau mot de passe"
            alert={alert}
          />

          <MyTextInput
            label="Confirmation de mot de passe"
            name="password_confirmation"
            type="password"
            placeholder="Confirmez le nouveau mot de passe"
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
