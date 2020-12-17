import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Card, Col, Row, Container,
} from 'react-bootstrap';

import Image from 'react-bootstrap/Image';
import ShopImage from './Page-Grise.jpg';
import { find } from '../../api/api-manager';

const Shop = () => {
  const { id } = useParams();
  const [shop, setShop] = useState(null);

  useEffect(
    () => find(`shops/${id}`, {
      authRequired: true,
      onSuccess: (result) => setShop(result),
    }),
    [],
  );

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header style={{ backgroundColor: '#45B5AA' }} className="text-center p-2">
          <h4 className="text-white">{ shop && shop.name}</h4>
          <p className="text-white m-0">
            {
              shop && shop.shop_categories
                && shop.shop_categories.map(({ title }) => title).join(' - ')
            }
          </p>
        </Card.Header>
        <Card.Body className="text-primary">
          <Row className="mb-5">
            <Col xs={6} md={4}>
              <Image src={ShopImage} className="Page-Grise.jpg/171x180" thumbnail />
            </Col>
            <Col xs={6} md={4}>
              <Image src={ShopImage} className="Page-Grise.jpg/171x180" thumbnail />
            </Col>
            <Col xs={6} md={4}>
              <Image src={ShopImage} className="Page-Grise.jpg/171x180" thumbnail />
            </Col>
          </Row>
          <Card.Title as="h5" className="text-center">Description</Card.Title>
          <Card.Text className="text-center">
            {
              shop && shop.description
                ? shop.description
                : 'Shop description'
            }
          </Card.Text>
          <Row>
            <Col className="text-center mt-4">
              <p className="m-0">Shop address :</p>
              <p className="m-0">
                {shop?.address}
                {' '}
                {shop?.zip_code}
              </p>
            </Col>
            <Col className="text-center mt-4">
              <p className="m-0">Shop city :</p>
              <p className="m-0">{shop?.city}</p>
            </Col>
            <Col className="text-center mt-4">
              <p className="m-0">References :</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Row>
        <Link to={`/shop/${id}/list_items`} className="btn btn_success_sass" variant="outline-success">
          Voir tous mes produits
        </Link>
      </Row>
    </Container>
  );
};

export default Shop;
