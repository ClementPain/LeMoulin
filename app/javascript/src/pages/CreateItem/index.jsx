import React from 'react';
import { Container, Row } from 'react-bootstrap';

import ItemForm from './ItemForm';

const ItemFormPage = () => {

  return (
  <Container fluid className="p-5">
    <Row className="justify-content-center">
      <h1>Créer un nouveau produit</h1>
    </Row>
    <ItemForm />
  </Container>
  )
}

export default ItemFormPage;