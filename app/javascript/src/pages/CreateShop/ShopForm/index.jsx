/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Col, Button, Row, FormControl, FormLabel
} from 'react-bootstrap';
import { Formik, Form } from 'formik';

import validation_shop_form from './config/validation_shop_form';

import { MyTextInput, MyTextArea, MyCheckbox, MySelect } from '../../../tools/formik-manager';

import { create, find } from '../../../api/api-manager';

const ShopForm = () => {
  const [categories, setCategories] = useState([]);
  const initialValues = {
    name: '',
    shop_category_ids: [],
    siret: '',
    description: '',
    address: '',
    city: '',
    zip_code: '',
    is_active: false,
  };
  const [shopId, setShopId] = useState(null);
  const [alert, setAlert] = useState(null);

  const handleNewShopCreation = (params) => {
    let newParams = {...params, shop_category_ids: params.shop_category_ids.join(',') }

    create('shops', {
      data: {
        shop: newParams,
      },
      onError: (error) => setAlert(error),
      onErrors: (errors) => setAlert(errors),
      onSuccess: (shop) => setShopId(shop.id),
    });
  };

  useEffect(() => find('shop_categories', {
      onSuccess: (response) => {
        response?.map((category) => {
          setCategories((previousArray) => [category, ...previousArray]);
        });
      }
    }), []);

  if (shopId) return <Redirect to={`/shop/${shopId}`} />;

  return (
    <Formik
      initialValues={initialValues}
      validate={validation_shop_form}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        handleNewShopCreation(data);
        setSubmitting(false);
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          { alert && alert.error && (<div className="alert alert-danger">{ alert.error }</div>) }
          <MyTextInput
            type="text"
            name="name"
            label="Renseignez le nom de votre boutique"
            placeholder="Le Moulin..."
            alert={alert}
          />

          <Row>
            <Col md={5}>
              <MySelect
                label="Choississez jusqu'à trois catégories"
                name="shop_category_ids"
                alert={alert}
                multiple
              >
                {categories?.map(({title, id}) => (
                  <option value={id} key={id}>{title}</option>
                ))}
              </MySelect>
            </Col>
            <Col>
              <MyTextInput
                label="Siret"
                type="text" name="siret"
                placeholder="0000000000"
                alert={alert}
              />
            </Col>
          </Row>

          <MyTextArea
            label="Description"
            row={3} name="description"
            placeholder="Ce moulin ne tombe jamais en panne..."
            alert={alert}
          />

          <MyTextInput
            label="Adresse de votre boutique"
            type="text" name="address"
            placeholder="12 rue Cours-Le-Bon..."
            alert={alert}
          />

          <Row>
            <Col sm={6}>
              <MyTextInput
                label="Code postale"
                type="text" name="zip_code"
                placeholder="83520..."
                alert={alert}
              />
            </Col>
            <Col sm={6}>
            <MyTextInput
                label="Ville"
                type="text" name="city"
                placeholder="Roquebrune-sur-Argens..."
                alert={alert}
              />
            </Col>
          </Row>
          
          <MyCheckbox
            type="checkbox"
            checked={values.is_active}
            name="is_active"
            label="Votre boutique est-elle déjà ouverte ?"
            alert={alert}
          />

          <Row className='justify-content-center'>
            <Button
              disabled={isSubmitting}
              type="submit"
              variant="outline-success"
              className="btn_success_sass"
            >
              Valider
            </Button>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default ShopForm;
