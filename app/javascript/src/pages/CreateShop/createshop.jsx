import React from 'react';

import {
  Container, Card,
} from 'react-bootstrap';

import CreateShopFormComponent from '../../components/CreateShopForm';

const CreateShopComponent = () => (

  <Container fluid className="mt-3">
    <Card>
      <Card.Body>
        <h1>Create a shop</h1>
        <p>
          Please fill all the fields
        </p>
        <CreateShopFormComponent />
      </Card.Body>
    </Card>
  </Container>

);

export default CreateShopComponent;
