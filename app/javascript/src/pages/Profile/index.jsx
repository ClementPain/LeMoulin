import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Field, ErrorMessage, Form, Formik,
} from 'formik';
import {
  Container, Row, Col, Card, Tabs, Tab, Button, FormGroup, ListGroup,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import avatar from './avatar.png';
import { find } from '../../api/api-manager';

const Profile = () => {
  const { currentUserId } = useSelector((state) => state);

  const [currentUser, setCurrentUser] = useState(null);
  const [showUpdateUserInfoForm, setShowUpdateUserInfoForm] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleOnInput = () => setAlert(null);

  useEffect(
    () => {
      if (currentUserId) {
        find(`users/${currentUserId}`, {
          authRequired: true,
          onError: (error) => console.log(error),
          onErrors: (errors) => console.log(errors),
          onSuccess: (result) => setCurrentUser(result),
        });
      }
    },
    [currentUserId],
  );

  return (
    <Container fluid className="px-2 mt-3 pt-3">
      <Row>
        <Col md={3} className="mb-3 mb-md-0">
          <img src={avatar} alt="Avatar" className="avatar" />
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                {currentUser && (
                  <Card.Title>
                    {currentUser.profile.first_name}
                    {' '}
                    {currentUser.profile.last_name}
                  </Card.Title>
                )}
              </ListGroup.Item>
              <ListGroup.Item active>Tableau de bord</ListGroup.Item>
              <ListGroup.Item action as={Link} to="">Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item action as={Link} to="">Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={9}>
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
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
