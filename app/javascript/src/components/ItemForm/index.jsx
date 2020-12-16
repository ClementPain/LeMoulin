/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { Formik, Form } from 'formik';
import {
  Button, Row, Col, FormCheck, FormControl,
} from 'react-bootstrap';

import { MyTextInput, MyTextArea, MyNumberInput, MyCheckbox } from '../../tools/formik-manager';

import { update } from '../../api/api-manager';

const ItemForm = ({handleSubmit, initialValues}) => {
  const [redirect, setRedirect] = useState(null);
  const [reloadPage, setReloadPage] = useState(false);
  const [alert, setAlert] = useState(null);
  const [itemImage, setItemImage] = useState(null);
  const { shop_id } = useParams();

  useEffect( () => console.log(itemImage), [itemImage])

  const uploadItemImage = async (item_id) => {
    const { files } = itemImage;
    console.log('itemImage : ', itemImage)
    console.log('files : ', files)
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'images_le_moulin');

    const response = await fetch('https://api.cloudinary.com/v1_1/dhtysnpro/image/upload', {
      method: 'post',
      body: data,
    });

    const file = await response.json();

    console.log('file : ', file)

    update(`items/${item_id}`, {
      data: {
        item: {
          images: file.secure_url,
        },
      },
      onSuccess: (response) => console.log('reponse', response),
      onError: (error) => console.log('error', error),
      onErrors: (errors) => console.log('errors', errors)
    });
  };

  if (!reloadPage && redirect) return <Redirect to={redirect} />;

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validate={validationItemForm}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        handleSubmit(data, uploadItemImage, setRedirect, shop_id, setAlert, itemImage);
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
            multiple
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
