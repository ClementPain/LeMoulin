/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { Formik, Form } from 'formik';
<<<<<<< HEAD
import {
  Button, Row, Col, FormCheck,
} from 'react-bootstrap';
=======
import { Button, Row, Col, FormCheck, FormControl } from 'react-bootstrap';
>>>>>>> develop

import {
  MyTextInput, MyTextArea, MyNumberInput, MyCheckbox,
} from '../../../tools/formik-manager';

<<<<<<< HEAD
import validationItemForm from './validate_item_form';
=======
import { MyTextInput, MyTextArea, MyNumberInput, MyCheckbox, MyFileUploader } from '../../../tools/formik-manager';
>>>>>>> develop

import { create, update } from '../../../api/api-manager';

const ItemForm = () => {
  const [redirect, setRedirect] = useState(null);
  const [multipleAdd, setMultipleAdd] = useState(false);
  const [alert, setAlert] = useState(null);
  const [itemImage, setItemImage] = useState(null);
  const { shop_id } = useParams();

  useEffect(() => console.log(itemImage), [itemImage])

  const initialValues = {
    name: '',
    description: '',
    price: 0.00,
    stock: 0,
    is_available_for_sale: true,
    image_url: '',
  };

  const uploadItemImage = async (item_id) => {
    console.log(item_id)
    const { files } = itemImage;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'images_le_moulin');

    const response = await fetch('https://api.cloudinary.com/v1_1/dhtysnpro/image/upload', {
      method: 'post',
      body: data,
    });

    const file = await response.json();

    console.log('item_loaded')

    update(`items/${item_id}`, {
      data: {
        item: {
          images: file.secure_url,
        },
      },
      onSuccess: (response) => console.log(response)
    });
  }

  const handleSubmit = (data) => {
    create('items', {
      data,
      onSuccess: () => { 
        console.log(response.id)
        uploadItemImage(response.id)
        if (!multipleAdd) setRedirect(`/shop/${shop_id}`); 
      },
      onError: (error) => setAlert(error),
      onErrors: (errors) => { setAlert(errors); },
    });
  };

  if (redirect) return <Redirect to={redirect} />;

  return (
    <Formik
      initialValues={initialValues}
      validate={validationItemForm}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        handleSubmit(data);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          { alert && alert.error && (<div className="alert alert-danger">{ alert.error }</div>) }
          <MyTextInput
            label="Nom de votre produit"
            type="text"
            name="name"
            placeholder="Moulin de qualité supérieur..."
            alert={alert}
          />
          <MyTextArea
            label="Description"
            row={3}
            name="description"
            placeholder="Ce moulin ne tombe jamais en panne..."
            alert={alert}
          />
          <Row>
            <Col sm={6}>
              <MyNumberInput
                type="number"
                name="price"
                label="Prix"
                min={0}
                max={9999999.99}
                alert={alert}
              />
            </Col>
            <Col sm={6}>
              <MyNumberInput
                type="number"
                name="stock"
                label="Nombre de produits en stock"
                min={0}
                max={9999999}
                alert={alert}
              />
            </Col>
          </Row>
          <MyCheckbox
            type="checkbox"
            checked={values.is_available_for_sale}
            name="is_available_for_sale"
            label="Disponible immédiatement à la vente"
            alert={alert}
          />

          <FormControl
            type="file" 
            name="image_url"
            onChange={(e) => setItemImage(e.target)}
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
          <Row className="justify-content-end">
            <FormCheck
              checked={multipleAdd}
              name="redirect_item_form"
              label="Créer plusieurs produits à la suite"
              onChange={() => setMultipleAdd(!multipleAdd)}
            />
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default ItemForm;
