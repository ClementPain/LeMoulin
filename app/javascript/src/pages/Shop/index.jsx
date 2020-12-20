import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Jumbotron, Card, Col, Row, Container, Dropdown,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

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
            <Row>
              <Col md={{ span: 4, offset: 4 }}>
                <h4 className="text-white">{ shop && shop.name}</h4>
                <p className="text-white m-0">
                  {
                    shop && shop.shop_categories
                    && shop.shop_categories.map(({ title }) => title).join(' - ')
                  }
                </p>
              </Col>
              <Col md={4}>
                {
                  currentUserId === shop?.shopkeeper_id && (
                    <Dropdown className="text-right">
                      <Dropdown.Toggle style={{ backgroundColor: '#45B5AA' }}>
                        Gérer ma boutique
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to={`/shop/${id}/update_infos`}>Modifier les informations de ma boutique</Dropdown.Item>
                        <Dropdown.Item as={Link} to={`/shop/${id}/list_items`}>Voir tous mes produits</Dropdown.Item>
                        <Dropdown.Item as={Link} to={`/shop/${id}/orders_tracking`}>Gérer les commandes effectuées</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )
                }
              </Col>
            </Row>
          </Card.Header>
          <Jumbotron
            fluid
            style={{
              backgroundImage: `url(${shop?.image ? shop.image : ShopImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              height: '300px',
            }}
          />
          <Card.Body className="text-primary">
            <Card.Title as="h5" className="text-center">Description</Card.Title>
            <Card.Text className="text-center" style={{ fontSize: '1rem' }}>
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
          </Card.Body>
        </Card>
      </Container>
      {
        currentUserId !== shop?.shopkeeper_id && (
          <BestItems bestItems={bestShopItemsList} />
        )
      }
    </>
  );
};

export default Shop;
