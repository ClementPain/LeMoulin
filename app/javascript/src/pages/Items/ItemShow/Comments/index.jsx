import React from 'react';
import { Container, Row } from 'react-bootstrap';

const CommentsOnItem = ({ item }) => (
  <Container>
    <Row>
      <p>Commentaires</p>
    </Row>
    <Row style={{ width: '100%', height: 700 }} className="align-self-center overflow-auto">
      <p> les coms</p>
    </Row>
  </Container>
)

export default CommentsOnItem