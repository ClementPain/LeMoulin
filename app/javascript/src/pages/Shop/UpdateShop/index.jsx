import React from 'react';

import {
  Container, Row, Col, Card,
} from 'react-bootstrap';

import UpdateShopForm from './UpdateShopForm';

const UpdateShop = () => (
  <Container className="mt-5" fluid>
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <Card>
          <Card.Header className="h5 bg-primary text-white">
            Modifier les informations de votre boutique
          </Card.Header>
          <Card.Body>
            <UpdateShopForm />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default UpdateShop;
