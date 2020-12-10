import './index.scss';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Field, ErrorMessage, Form, Formik,
} from 'formik';
import {
  Container, Row, Col, Card, Tabs, Tab, Button, Accordion, FormGroup,
} from 'react-bootstrap';

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
          onSuccess: (result) => setCurrentUser(result)
          ,
        });
      }
    },
    [currentUserId],
  );

  return (
    <Container fluid className="mt-3 pt-3">
      <Row>
        <Col md={3} className="mb-3 mb-md-0">
          <img src={avatar} alt="Avatar" className="avatar" />
          <Card>
            <Card.Body>
              <Card.Title>
                {currentUser?.profile.first_name}
                {' '}
                {currentUser?.profile.last_name}
              </Card.Title>
              <Card.Text />
              <p>{currentUser?.profile.address}</p>
              <p>{currentUser?.profile.zip_code}</p>
              <p className="text-muted">{currentUser?.email}</p>
              <Button variant="primary" size="sm" className="text-center">Modifier</Button>
            </Card.Body>
          </Card>
          <Accordion className="my-3">
            <Card>
              <Card.Header className="bg-primary">
                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="text-white text-decoration-none">
                  Informations de connexion
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
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
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="bg-primary">
                <Accordion.Toggle as={Button} variant="link" eventKey="1" className="text-white text-decoration-none">
                  Informations personnelles
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Informations personnelles</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col md={9}>
          <Tabs defaultActiveKey="my-commands">
            <Tab eventKey="my-commands" title="Mes commandes" className="p-3">
              Mes commandes
            </Tab>
            <Tab eventKey="my-shop" title="Ma boutique" className="p-3">
              Ma boutique
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
