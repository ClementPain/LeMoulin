/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';

import { Image } from 'cloudinary-react';
import { Col, Card } from 'react-bootstrap';
import faker from 'faker';

const ShopItem = ({ item }) => {
  const {
    id, name, description, price, images, shop_id,
  } = item || {};

  return (
    <Col md={3} className="mb-4">
      <Card className="h-100">
        <Card.Img
          variant="top"
          as={Image}
          publicId={images[0]}
          cloudName="dhtysnpro"
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>
            <Link to={`/shop/${shop_id}/item/${id}`} className="cardlinks cardlinks-green">
              {name}
            </Link>
          </Card.Title>
          <Card.Text>
            {description?.length <= 150 ? description : `${description?.substring(0, 150)}...`}
          </Card.Text>
          <Card.Text className="h4">
            {`${price.toFixed(2)} €`}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ShopItem;
