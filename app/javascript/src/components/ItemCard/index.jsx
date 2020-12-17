import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';

const ItemCard = ({ item }) => (
  <Card>
    <Card.Header className="text-white bg-primary">
      <Card.Title>{ item?.name }</Card.Title>
    </Card.Header>
    <Link
      className="cardlinks"
      to={`/shop/${item?.shop?.id}/item/${item?.id}`}
    >
      <Card.Img variant="top" />
    </Link>
    <Card.Body>
      <Link
        className="cardlinks"
        to={`/shop/${item?.shop?.id}/item/${item?.id}`}
      >
        <Col className="mb-4">
          { item?.images && (
          <Image publicId={item?.images[0]} cloudName="dhtysnpro" crop="scale" className="img-fluid" style={{ height: 100 }} />
          )}
          { item?.images?.length === 0 && (
          <Image publicId="sample" cloudName="dhtysnpro" crop="scale" className="img-fluid" style={{ height: 100 }} />
          )}
        </Col>
        <Col>
          <h6 className="mb-3 text-black">
            <Card.Subtitle className="mb-2 text-black">
              { item?.shop_categories?.map((cat) => cat.title).join(', ') }
            </Card.Subtitle>
          </h6>
        </Col>
      </Link>
      <Row>
        <Col sm={9}>
          <footer className="blockquote-footer">
            <Link
              className="cardlinks cardlinks-green"
              to={`/shop/${item?.shop?.id}/item/${item?.id}`}
            >
              {item?.shop?.name}
              {' '}
              -
              {item?.shop?.address}
              ,
              {item?.shop?.city}
            </Link>
          </footer>
        </Col>
        <Col sm={3}>
          <Link
            className="cardlinks cardlinks-green"
            to={`/shop/${item?.shop?.id}/item/${item?.id}`}
          >
            Voir plus
          </Link>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

export default ItemCard;
