/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import {
  Row, Container, Col, Button
} from 'react-bootstrap';
import Cookie from 'js-cookie';
import ShopCard from './ShopCard';
import ButtonCreateOrder from './ButtonCreateOrder';

import { create } from '../../../api/api-manager';

const Cart = () => {
  const [cart, setCart] = useState({});

  useEffect(() => { if (Cookie.get('cart')) setCart(JSON.parse(Cookie.get('cart'))); }, []);

  const [itemsInCart, setItemsInCart] = useState({});

  useEffect(() => {
    if (Cookie.get('cart')) {
      create('carts', {
        data: cart,
        onSuccess: (response) => setItemsInCart(response),
      });
    }
  }, [cart]);

  if (Object.entries(cart).length === 0) {
    return (
      <Container fluid>
        <p>Votre panier est vide</p>
      </Container>
    );
  }

  return (
    <Container fluid>
      <Row className='justify-content-end'>
        <ButtonCreateOrder cart={cart} />
      </Row>
      <Row className="border-bottom">
        <Col sm={6}>
          <p>Articles</p>
        </Col>
        <Col sm={2} className="text-right pr-2">
          <p>Quantité</p>
        </Col>
        <Col sm={3} className="text-right pr-2">
          <p>Total TTC</p>
        </Col>
        <Col sm={1} />
      </Row>
      <Container style={{ width: '100%', height: 500 }} className="overflow-auto">
        { Object.keys(itemsInCart).map((shop_id) => (
          <div key={shop_id}>
            <ShopCard
              shop={itemsInCart[shop_id].shop}
              items={itemsInCart[shop_id].items}
              cart_state={setCart}
              />
          </div>
        ))}
      </Container>
    </Container>
  );
};

export default Cart;
