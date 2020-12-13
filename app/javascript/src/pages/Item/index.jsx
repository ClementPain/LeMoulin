import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Col, Row, Container,
} from 'react-bootstrap';
import { find } from '../../api/api-manager';

import ItemInformations from './Informations';

const Item = () => {
  const { item_id } = useParams();
  const [item, setItem] = useState('');

  useEffect(() => {
    find(`items/${item_id}`, {
      authRequired: false,
      onError: (error) => console.log(error),
      onErrors: (errors) => console.log(errors),
      onSuccess: (result) => setItem(result),
    });
  }, []);

  return (
    <Container fluid>
      <Row className="m-5">
        <Col sm={5} />
        <Col sm={1} />
        <Col sm={6}>
          <ItemInformations item={item} />
        </Col>
      </Row>
    </Container>
  );
};

export default Item;
