/* eslint-disable camelcase */
import React, { useState, useEffect} from 'react';
import { useParams, Redirect } from 'react-router-dom';
import {
  Col, Button, Row, FormGroup, FormLabel, FormControl
} from 'react-bootstrap';
//import Form from 'react-bootstrap/Form';
import {Form, Formik} from 'formik';

import {
    MyTextField, MyCategoriesField
  } from './formik_helpers';

import { create, find } from '../../api/api-manager';

const CreateShopFormComponent = () => {
  const initialValues ={
    name: '',
    shop_category_ids: '',
    siret: '',
    description: '',
    address: '',
    city: '',
    zip_code: '',
    is_active: false,
  };

  // const [newshop, setNewshop] = useState({
  //   name: '',
  //   shop_category_ids: '',
  //   siret: '',
  //   description: '',
  //   address: '',
  //   city: '',
  //   zip_code: '',
  //   is_active: false,
  // });
  const [shopId, setShopId] = useState(null);

  const handleSubmit = (params) => {
    create('shops', {
      data: {
        shop: params,
      },
      onErrors: (errors) => console.log(errors),
      onSuccess: (shop) => setShopId(shop.id),
    });
  };


  if (shopId) return <Redirect to={`/shop/${shopId}`} />;

  return (

    <Formik
    initialValues={initialValues}
  //  validate={(values) => validation(values)}
      onSubmit={(data, { setSubmitting }) => {
      setSubmitting(true);
      handleSubmit(data);
      setSubmitting(false);
    }}
    >
      {({ values, errors, isSubmitting }) => (
      <Form>
        <MyTextField type="text" name="name" placeholder="Nom de la boutique" />
        <MyCategoriesField type="select" shop_category_ids = "shop_category_ids"          
      />
        <Button
              disabled={isSubmitting}
              type="submit"
              variant="outline-success"
              className="btn_success_sass"
        >
          Submit
        </Button>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </Form>
      
      )}
    </Formik>
    );
};

export default CreateShopFormComponent;
