/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import {
  Row, Col, FormControl,
} from 'react-bootstrap';

import FormikForm from '../../../../components/FormikForm';

import {
  MyTextInput, MySelect, MyTextArea, MyCheckbox,
} from '../../../../tools/formik-manager';

import { find, update } from '../../../../api/api-manager';
import validate from './config/validate';

const UpdateShopForm = () => {
  const { shop_id } = useParams();
  const [categories, setCategories] = useState(null);
  const [initialValues, setInitialValues] = useState(null);
  const [alert, setAlert] = useState(null);
  const [shopImage, setShopImage] = useState(null);
  const [redirect, setRedirect] = useState(null);

  const getCategories = () => {
    find('shop_categories', {
      onSuccess: (data) => { setCategories(data); },
    });
  };

  const getShop = () => {
    find(`shops/${shop_id}`, {
      onSuccess: (shop) => { setInitialValues(shop); },
    });
  };

  const uploadShopImage = async () => {
    const data = new FormData();
    data.append('file', shopImage);
    data.append('upload_preset', 'images_le_moulin');

    const response = await fetch('https://api.cloudinary.com/v1_1/dhtysnpro/image/upload', {
      method: 'post',
      body: data,
    });

    const remoteImageData = await response.json();

    return remoteImageData;
  };

  const handleOnSubmit = async (values) => {
    const { secure_url: image } = await uploadShopImage();

    update(`shops/${shop_id}`, {
      data: {
        shop: {
          ...values,
          image,
        },
      },
      onError: (error) => setAlert(error),
      onErrors: (errors) => { setAlert(errors[0].detail); },
      onSuccess: () => { setRedirect(`/shop/${shop_id}`); },
    });
  };

  useEffect(
    () => {
      getCategories();
      getShop();
    },
    [],
  );

  if (redirect) return <Redirect to={redirect} />;

  return (
    <>
      {
        initialValues && (
          <FormikForm
            initialValues={initialValues}
            validate={validate}
            handleOnSubmit={handleOnSubmit}
          >
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
                  name="shop_category_ids"
                  label="Choississez jusqu'à trois catégories"
                  multiple
                  alert={alert}
                >
                  {categories?.map(({ title, id }) => (
                    <option value={id} key={id}>{title}</option>
                  ))}
                </MySelect>
              </Col>
              <Col>
                <MyTextInput
                  type="text"
                  name="siret"
                  label="Siret"
                  placeholder="0000000000"
                />
              </Col>
            </Row>

            <MyTextArea
              name="description"
              label="Description"
              placeholder="Ce moulin ne tombe jamais en panne..."
              row={3}
              alert={alert}
            />

            <MyTextInput
              type="text"
              name="address"
              label="Adresse de votre boutique"
              placeholder="12 rue Cours-Le-Bon..."
              alert={alert}
            />

            <Row>
              <Col sm={6}>
                <MyTextInput
                  type="text"
                  name="zip_code"
                  label="Code postale"
                  placeholder="83520..."
                  alert={alert}
                />
              </Col>
              <Col sm={6}>
                <MyTextInput
                  type="text"
                  name="city"
                  label="Ville"
                  placeholder="Roquebrune-sur-Argens..."
                  alert={alert}
                />
              </Col>
            </Row>

            <FormControl
              type="file"
              name="imageData"
              onChange={(e) => setShopImage(e.target.files[0])}
            />

            <MyCheckbox
              type="checkbox"
              name="is_active"
              label="Votre boutique est-elle déjà ouverte ?"
              alert={alert}
            />
          </FormikForm>
        )
      }
    </>
  );
};

export default UpdateShopForm;
