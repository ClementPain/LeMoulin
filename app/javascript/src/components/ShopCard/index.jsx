import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const ShopCard = ({ shop }) => (
  <Card>
    <Card.Header style={{ backgroundColor: '#45B5AA' }}>
      <Row>
        <Col sm={6}>
          <Card.Title className="text-white text-center">{ shop.name }</Card.Title>
        </Col>
        <Col sm={6} className="text-white text-center">
          {shop.shop_categories.map((cat) => cat.title).join(', ') }
        </Col>
      </Row>
    </Card.Header>
    <Card.Body>
      <Card.Text>{ shop.description }</Card.Text>
      <footer className="blockquote-footer">
        {shop.address}
        {' '}
        -
        {shop.city}
      </footer>
    </Card.Body>
  </Card>
);

export default ShopCard;
