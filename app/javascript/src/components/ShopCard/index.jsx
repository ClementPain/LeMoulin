import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ShopImage from '../../pages/Shop/Boutique.jpg';

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
      <Row>
        <Col sm={6}>
          <Card.Text>{ shop.description }</Card.Text>
          <footer className="blockquote-footer">
            {shop.address} - {shop.city}
          </footer>
        </Col>
        <Col sm={6} className='text-center'>
          <img src={ShopImage} className='img-fluid' style={{height: 100}} />
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

export default ShopCard;
