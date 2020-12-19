/* eslint-disable react/prop-types */
import React from 'react';
import { Formik, Form } from 'formik';
import { Button, Row } from 'react-bootstrap';

const FormikForm = ({
  initialValues, validate, handleOnSubmit, children,
}) => (
  <Formik
    initialValues={initialValues}
    validate={validate}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
      handleOnSubmit(values);
    }}
  >
    <Form>

      {children}

      <Row className="justify-content-center">
        <Button type="submit" variant="outline-success">Valider</Button>
      </Row>
    </Form>
  </Formik>
);

export default FormikForm;
