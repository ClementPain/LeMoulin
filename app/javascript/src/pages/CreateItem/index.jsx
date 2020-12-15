import React from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';

import ItemForm from './ItemForm';

const ItemFormPage = () => (
  <Container fluid className="mt-5">
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card.Header className="bg-primary">
            <h5 className="text-white text-center">Créer un nouveau produit</h5>
          </Card.Header>
          <Card.Body className="px-4">
            <ItemForm />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ItemFormPage;
