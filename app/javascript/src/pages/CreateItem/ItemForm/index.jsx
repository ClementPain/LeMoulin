/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Button, Row } from 'react-bootstrap';

import {
  MyTextField, MyNumberField, MyCheckboxField, validation,
} from './formik_helpers';

import { create } from '../../../api/api-manager';

const ItemForm = () => {
  const [redirect, setRedirect] = useState(null);
  const { shop_id } = useParams();
  const initialValues = {
    name: '',
    description: '',
    price: 0.00,
    stock: 0,
    is_available_for_sale: true,
  };

  const handleSubmit = (data) => {
    create('items', {
      data,
      onSuccess: () => setRedirect(`/shop/${shop_id}`),
    });
  };

  if (redirect) return <Redirect to={redirect} />;

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => validation(values)}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        handleSubmit(data);
        setSubmitting(false);
      }}
    >
      {({ values, errors, isSubmitting }) => (
        <Form>
          <MyTextField type="text" name="name" placeholder="Nom du produit" />
          <MyTextField type="textarea" name="description" placeholder="Description" />
          <MyNumberField
            type="number"
            name="price"
            label="Prix"
            min={0}
            max={9999999.99}
          />
          <MyNumberField
            type="number"
            name="stock"
            label="Nombre de produits en stock"
            min={0}
            max={9999999}
          />
          <MyCheckboxField
            type="checkbox"
            checked={values.is_available_for_sale}
            name="is_available_for_sale"
            label="Disponible immédiatement à la vente"
          />
          <Row className="justify-content-center mt-4">
            <Button
              disabled={isSubmitting}
              type="submit"
              variant="outline-success"
              className="btn_success_sass"
            >
              Valider
            </Button>
          </Row>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

export default ItemForm;
