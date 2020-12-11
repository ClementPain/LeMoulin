import React, { useState } from 'react';
import {
  Col, Button,
} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { create } from '../../api/api-manager';

const CreateShopFormComponent = () => {
  const [newshop, setNewshop] = useState({
    name: '',
    description: '',
    address: '',
    city: '',
    zip_code: '',
    is_active: false,
  });

  const handleNewShopCreation = (params) => {
    console.log('Fetch Handle: ', params);
    create('shops', { data: params });
  };

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
          ,

        </Form.Group>

      </Form.Row>

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

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
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
    </Form>
  );
};

export default CreateShopFormComponent;
