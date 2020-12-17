/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import faker from 'faker';
import { Link } from 'react-router-dom';

const BestItems = ({ bestItems }) => (
  <Row>
    <Col as="h4" xs={12} className="mb-3">Tous nos articles</Col>
    {
        bestItems?.map(({
          id, name, description, price, images, shop_id,
        }) => (
          <Col key={id} md={3}>
            <Card className="h-100">
              <Card.Img
                as={Image}
                variant="top"
                publicId={images[0]}
                cloudName="dhtysnpro"
              />
              <Card.Img
                variant="top"
                src={faker.image.image()}
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
        ))
      }
  </Row>
);

export default BestItems;
