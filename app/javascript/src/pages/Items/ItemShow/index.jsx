import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Col, Row, Container, Button
} from 'react-bootstrap';
import { find } from '../../../api/api-manager';

import ItemInformations from './Informations';
import ItemImage from './Image';

const Item = () => {
  const { currentUserId } = useSelector((state) => state);
  console.log('currentUserId', currentUserId)
  const { item_id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    find(`items/${item_id}`, {
      authRequired: false,
      onError: (error) => console.log(error),
      onErrors: (errors) => console.log(errors),
      onSuccess: (result) => {
        setItem(result)
        console.log(item)
      },
    });
  }, []);

  return (
    <Container fluid>
      <Row className="m-5">
        <Col sm={5}>
          <ItemImage item={item} />
        </Col>
        <Col sm={1} />
        <Col sm={6}>
          <ItemInformations item={item} />
        </Col>
      </Row>

      { currentUserId === item?.shop?.shopkeeper_id && (
        <Row className='ml-4'>
          <Button as={Link} to={`/shop/${item.shop.id}/item/${item.id}/update_an_item`}>Modifier les informations</Button>
        </Row>

      )}
    </Container>
  );
};

export default Item;
