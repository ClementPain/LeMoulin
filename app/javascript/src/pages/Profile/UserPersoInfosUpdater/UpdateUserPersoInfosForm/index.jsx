/* eslint-disable camelcase */
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

  useEffect(
    updateCurrentUser,
    [],
  );

  const handleOnInput = () => setAlert(null);

  const handleSubmit = (values, resetForm) => {
    accountUpdate(`profiles/${currentUser.profile.id}`, {
      data: {
        profile: values,
      },
      onErrors: (errors) => { setAlert(errors[0].detail); },
      onSuccess: () => {
        updateCurrentUser((user) => { resetForm({ values: user.profile }); });
        setUpdateSuccessFlag(true);
        setTimeout(
          () => { setUpdateSuccessFlag(false); },
          3000,
        );
      },
    });
  };

  const {
    last_name,
    first_name,
    address,
    zip_code,
  } = currentUser?.profile || {};

  const initialValues = {
    last_name: last_name || '',
    first_name: first_name || '',
    address: address || '',
    zip_code: zip_code || '',
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
          <Card>
            <Card.Header className="bg-primary px-4">
              <Card.Title className="text-white text-center mt-2">Mettre à jour les informations personnelles</Card.Title>
            </Card.Header>
            <Card.Body>
              { updateSuccessFlag && (<div className="alert alert-success">Informations mis à jour avec succès</div>) }
              <MyTextInput
                label="Nom"
                name="last_name"
                type="text"
                placeholder="Entrez votre nom"
                alert={alert}
              />

              <MyTextInput
                label="Prénom"
                name="first_name"
                type="text"
                placeholder="Entrez votre prénom"
                alert={alert}
              />

              <MyTextInput
                label="Adresse"
                name="address"
                type="text"
                placeholder="Entrez votre adresse"
                alert={alert}
              />

              <MyTextInput
                label="Code postal"
                name="zip_code"
                type="text"
                placeholder="Entrez votre code postal"
                alert={alert}
              />

              <FormGroup className="text-center">
                <Button type="submit" variant="primary" size="sm" disabled={isSubmitting}>
                  Mettre à jour
                </Button>
              </FormGroup>
            </Card.Body>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateUserAuthInfosForm;
