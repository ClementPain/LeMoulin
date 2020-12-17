/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ShopItem from '../ShopItem';

const BestItems = ({ bestItems }) => (
  <Row>
    <Col as="h4" xs={12} className="mb-3">Tous les produits</Col>
    {
      bestItems?.map((item) => (
        <ShopItem key={item.id} item={item} />
      ))
    }
  </Row>
);

export default BestItems;
