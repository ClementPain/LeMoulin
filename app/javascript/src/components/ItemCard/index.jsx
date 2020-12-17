import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TemplateImage from './template.jpg';

const ItemCard = ({ item }) => (
  <Card>
    <Card.Img variant="top" />
    <Card.Body>
      <Link
        className="cardlinks"
        to={`/shop/${item.shop.id}/item/${item.id}`}
      >
        <div className="mb-3 text-black">
          <Card.Title>{ item.name }</Card.Title>
          <Card.Subtitle className="mb-2 text-black">
            { item.shop_categories.map((cat) => cat.title).join(', ') }
          </Card.Subtitle>
          <Card.Text>
            <img src={TemplateImage} className="template" alt="template" style={{ height: 80 }} />
          </Card.Text>
        </div>
      </Link>
      <Row>
        <Col sm={9}>
          <footer className="blockquote-footer">
            <Link
              className="cardlinks cardlinks-green"
              to={`/shop/${item.shop.id}/item/${item.id}`}
            >
              {item.shop.name}
              {' '}
              -
              {item.shop.address}
              ,
              {item.shop.city}
            </Link>
          </footer>
        </Col>
        <Col sm={3}>
          <Link
            className="cardlinks cardlinks-green"
            to={`/shop/${item.shop.id}/item/${item.id}`}
          >
            Voir plus
          </Link>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

export default ItemCard;
