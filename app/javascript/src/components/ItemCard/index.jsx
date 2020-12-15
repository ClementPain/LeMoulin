import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => (
  <Card className="bg-primary">
    <Card.Img variant="top" />
    <Card.Body>
      <Link
        className="cardlinks"
        to={`shop/${item.shop.id}/item/${item.id}`}
      >
        <div className="mb-3 text-white">
          <Card.Title>{ item.name }</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            { item.shop_categories.map((cat) => cat.title).join(', ') }
          </Card.Subtitle>
          <Card.Text>
            { item.description.length <= 180 ? item.description : `${item.description.slice(0, 179)}...` }
          </Card.Text>
        </div>
      </Link>
      <Row>
        <Col sm={9}>
          <footer className="blockquote-footer">
            <Link
              className="cardlinks cardlinks-green"
              to={`shop/${item.shop.id}/item/${item.id}`}
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
            to={`shop/${item.shop.id}/item/${item.id}`}
          >
            Voir plus
          </Link>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

export default ItemCard;
