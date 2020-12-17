/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import { Image } from 'cloudinary-react';

const BestItems = ({ bestItems }) => {
  console.log(bestItems);

  return (
    <Row className="mt-5">
      {
        bestItems?.map(({ name, description, images }, indx) => (
          <Col key={indx} md={4}>
            <Card>
              <Card.Img as={Image} variant="top" publicId={images[0]} cloudName="dhtysnpro" />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {description?.substring(0, 100)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      }
    </Row>
  );
};

export default BestItems;
