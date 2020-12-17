/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import faker from 'faker';
import { Link } from 'react-router-dom';

const BestItems = ({ bestItems }) => {
  console.log('BestItems');

  return (
    <Row className="mt-5">
      {
        bestItems?.map(({
          id, name, description, images, shop_id,
        }) => (
          <Col key={id} md={4}>
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
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {description?.length <= 150 ? description : `${description?.substring(0, 150)}...`}
                </Card.Text>
                <footer>
                  <Link to={`/shop/${shop_id}/item/${id}`} className="cardlinks cardlinks-green">Voir plus</Link>
                </footer>
              </Card.Body>
            </Card>
          </Col>
        ))
      }
    </Row>
  );
};

export default BestItems;
