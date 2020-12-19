import React from 'react';

import {
  Container, Card, Row, Col,
} from 'react-bootstrap';

import ShopForm from './ShopForm';

const CreateShopComponent = () => (

  <Container fluid className="mt-5">
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <Card>
          <Card.Header className="bg-primary">
            <h5 className="text-white text-center">Créer votre boutique</h5>
          </Card.Header>
          <Card.Body>
            <ShopForm />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default CreateShopComponent;
