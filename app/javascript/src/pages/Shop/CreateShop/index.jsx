import React from 'react';

import {
  Container, Card, Row, Col,
} from 'react-bootstrap';

import CreateShopForm from './CreateShopForm';

const CreateShop = () => (
  <Container className="mt-5" fluid>
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <Card>
          <Card.Header className="bg-primary">
            <h5 className="text-white text-center">Créer votre boutique</h5>
          </Card.Header>
          <Card.Body>
            <CreateShopForm />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default CreateShop;
