import React from 'react';

import {
  Container, Card, Row, Col,
} from 'react-bootstrap';

import CreateShopFormComponent from '../../components/CreateShopForm';

const CreateShopComponent = () => (

  <Container fluid className="mt-3">
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <Card>
          <Card.Body>
            <h1>Create a shop</h1>
            <p>
              Please fill all the fields
            </p>
            <CreateShopFormComponent />
          </Card.Body>
        </Card>

      </Col>
    </Row>
  </Container>

);

export default CreateShopComponent;
