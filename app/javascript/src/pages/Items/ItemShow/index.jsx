import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Col, Row, Container, Button, Card,
} from 'react-bootstrap';
import { find } from '../../../api/api-manager';

import ItemInformations from './Informations';
import ItemImage from './Image';
import { UpdateItemButton } from '../../../components/ItemCard/ItemButtons';

const Item = () => {
  const { currentUserId } = useSelector((state) => state);
  console.log('currentUserId', currentUserId);
  const { item_id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    find(`items/${item_id}`, {
      authRequired: false,
      onError: (error) => console.log(error),
      onErrors: (errors) => console.log(errors),
      onSuccess: (result) => {
        setItem(result);
        console.log(item);
      },
    });
  }, []);

  return (
    <Container fluid>
      <Row className="m-5">
        <Col sm={5}>
            <ItemImage item={item} style={{ hight: 100 }}/>
        </Col>
        <Col sm={1} />
        <Col sm={6} className="p-4" style={{ backgroundColor: 'white' }}>
          <ItemInformations item={item} />
        </Col>
      </Row>
      { currentUserId === item?.shop?.shopkeeper_id && (
        <Row className="mt-4">
          <UpdateItemButton item={item} />
        </Row>
      )}
    </Container>
  );
};

export default Item;
