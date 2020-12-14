/* eslint-disable camelcase */
import React, { useState} from 'react';
import { useParams, Redirect } from 'react-router-dom';
import {
  Col, Button, Row,
} from 'react-bootstrap';
//import Form from 'react-bootstrap/Form';
import { Formik, Form } from 'formik';

// import {
//   MyTextField, MyNumberField, MyCheckboxField, validation,
// } from './formik_helpers';

import { create, find } from '../../api/api-manager';

const CreateShopFormComponent = () => {
  const [categories, setCategories] = useState();
  const [newshop, setNewshop] = useState({
    name: '',

    shop_category_ids: '',
    siret: '',
    description: '',
    address: '',
    city: '',
    zip_code: '',
    is_active: false,
  });
  const [shopId, setShopId] = useState(null);

  const handleNewShopCreation = (params) => {
    create('shops', {
      data: {
        shop: params,
      },
      onErrors: (errors) => console.log(errors),
      onSuccess: (shop) => setShopId(shop.id),
    });
  };

  useEffect(
    () => find('shop_categories', {
      onSuccess: (shopCategories) => setCategories(shopCategories),
    }),
    [],
  );

  if (shopId) return <Redirect to={`/shop/${shopId}`} />;

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={newshop.name}
            onChange={(event) => setNewshop({ ...newshop, name: event.target.value })}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group as={Row}>
        <Col md={5}>
          <Form.Label>Sélectionner des catégorries</Form.Label>
          <Form.Control
            as="select"
            onChange={(event) => {
              const { options } = event.target;
              const shop_category_ids = [...options].reduce(
                (acc, { selected, value }) => (selected ? [...acc, value] : acc), [],
              ).join(',');
              setNewshop({ ...newshop, shop_category_ids });
            }}
            multiple
          >
            {
              categories && (
                categories.map(({ id, title }) => <option key={id} value={id}>{title}</option>)
              )
            }
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Siret</Form.Label>
          <Form.Control
            placeholder=""
            value={newshop.siret}
            onChange={(event) => setNewshop({ ...newshop, siret: event.target.value })}
          />
        </Col>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={newshop.description}
          onChange={(event) => setNewshop({ ...newshop, description: event.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control
          placeholder="1234 Main St"
          value={newshop.address}
          onChange={(event) => setNewshop({ ...newshop, address: event.target.value })}
        />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={newshop.city}
            onChange={(event) => setNewshop({ ...newshop, city: event.target.value })}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            value={newshop.zip_code}
            onChange={(event) => setNewshop({ ...newshop, zip_code: event.target.value })}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group id="formGridCheckbox">
        <Form.Check
          type="checkbox"
          label="Active"
          value={newshop.is_active}
          onChange={() => setNewshop({ ...newshop, is_active: !newshop.is_active })}
        />
      </Form.Group>

      <Button
        variant="primary"
        onClick={() => handleNewShopCreation(newshop)}
      >
        Submit
      </Button>
      <pre>{JSON.stringify(newshop, null, 2)}</pre>
      <pre>{JSON.stringify(errors, null, 2)}</pre>
    </Form>
  );
};

export default CreateShopFormComponent;
