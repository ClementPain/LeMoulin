import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Card, Col, Row, Container, Button,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Jumbotron from 'react-bootstrap/Jumbotron';
import ShopImage from './Boutique.jpg';
import { find } from '../../api/api-manager';
import BestItems from './BestItems';

const Shop = () => {
  const { currentUserId } = useSelector((state) => state) ? useSelector((state) => state) : null;
  const { id } = useParams();
  const [shop, setShop] = useState(null);
  const [bestShopItemsList, setBestShopItemsList] = useState(null);

  useEffect(
    () => find(`shops/${id}`, {
      authRequired: true,
      onSuccess: (result) => {
        setShop(result);
        setBestShopItemsList(result.items);
      },
    }),
    [],
  );

  return (
    <>
      <Container className="p-5" fluid>
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
          <Jumbotron
            fluid
            style={{
              backgroundImage: `url(${ShopImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              height: '300px',
            }}
          />
          <Card.Body className="text-primary">
            <Card.Title as="h4" className="text-center">Description</Card.Title>
            <Card.Text className="text-center">
              {
                shop && shop.description
                  ? shop.description
                  : 'Shop description'
              }
            </Card.Text>
            <Row>
              <Col className="text-center mt-4">
                <h6 className="m-0">Shop address :</h6>
                <p className="m-0">
                  {shop?.address}
                  {' '}
                  {shop?.zip_code}
                </p>
              </Col>
              <Col className="text-center mt-4">
                <h6 className="m-0">Shop city :</h6>
                <p className="m-0">{shop?.city}</p>
              </Col>
              <Col className="text-center mt-4">
                <h6 className="m-0">References :</h6>
              </Col>
            </Row>

            { currentUserId === shop?.shopkeeper_id && (
            <Col className="text-center mt-4">
              <Button as={Link} to={`/shop/${id}/list_items`} className="btn btn_success_sass" variant="outline-success">
                Voir tous mes produits
              </Button>
            </Col>
            )}

          </Card.Body>
        </Card>
      </Container>
      {
        currentUserId !== shop?.shopkeeper_id && (
          <Container className="px-5" fluid>
            <Card className="p-3">
              <BestItems bestItems={bestShopItemsList} />
            </Card>
          </Container>
        )
      }
    </>
  );
};

export default Shop;
