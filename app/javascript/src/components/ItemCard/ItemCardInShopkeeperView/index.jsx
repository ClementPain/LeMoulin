import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Image } from 'cloudinary-react';

import { UpdateItemButton, DeleteItemButton } from '../ItemButtons';
import { Formik, Form } from 'formik';
import validate_item_price_and_stock from './validate_item_price_and_stock';
import { MyNumberInput } from '../../../tools/formik-manager';

import { update } from '../../../api/api-manager';

const ItemCardInShopkeeperView = ({item, setRefresh}) => {
  const [alert, setAlert] = useState(null);

  const initialValues = {
    stock: item.stock,
    price: item.price
  }

  const handleSubmit = (data, item) => { 
    update(`items/${item.id}`, {
      data,
      onSuccess: (response) => console.log(response),
      onError: (error) => setAlert(error),
      onErrors: (errors) => setAlert(errors)
    });
  };

  return (
  <Card className='w-100'>
    <Card.Header style={{ backgroundColor: '#45B5AA' }}>
      <Card.Title className="text-white text-center">{ item.name }</Card.Title>
    </Card.Header>
    <Card.Body>
      <Row>
        <Col sm={3}>
          { item.images?.length > 0 && (
            <Image
              publicId={item?.images[0]} cloudName="dhtysnpro" crop="scale"
              className='img-fluid' style={{maxHeight: 150, maxWidth: 150}}
            />
          )}
          { item.images?.length === 0 && (
            <Image publicId='sample' cloudName="dhtysnpro" crop="scale" className='img-fluid' />
          )}
        </Col>
        <Col sm={3}>
          <Card.Text>{ item.description }</Card.Text>
        </Col>
        <Col sm={3}>
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validate={validate_item_price_and_stock}
            onSubmit={(data) => handleSubmit(data, item)}
          >
            <Form>
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
                    label="Stock"
                    min={0}
                    max={9999999}
                    alert={alert}
                  />
                </Col>
              </Row>
              <Row className='justify-content-center p-3'>
                <Button
                  type="submit"
                  variant="outline-success"
                  className="btn_success_sass btn-sm"
                >
                  Valider
                </Button>
              </Row>
            </Form>
          </Formik>
        </Col>
        <Col sm={3} className='align-items-center'>
          <Row className="justify-content-center mb-2">
            <UpdateItemButton item={item} />
          </Row>
          <Row className="justify-content-center mt-2">
            <DeleteItemButton
              item={item}
              redirection={() => setRefresh({})}
            />
          </Row>
        </Col>
      </Row>
    </Card.Body>
  </Card>
  )
}

export default ItemCardInShopkeeperView