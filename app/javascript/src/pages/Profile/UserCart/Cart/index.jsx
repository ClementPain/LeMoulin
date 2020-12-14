import React, { useState, useEffect } from 'react';
import {
  Row, Container, Col
} from 'react-bootstrap';
import ShopCard from './ShopCard';

import Cookie from 'js-cookie';

import { create } from '../../../../api/api-manager';

const Cart = () => {
  let cart = {};
  if (Cookie.get('cart')) cart = JSON.parse(Cookie.get('cart'));
  
  const [itemsInCart, setItemsInCart] = useState({});

  useEffect(() => {
    if (Cookie.get('cart')) {
      create('carts', {
        data: cart,
        onSuccess: (response) => setItemsInCart(response)
      })
    }
  }, [])

  if (!Cookie.get('cart') || cart.length === 0) return (
    <Container fluid>
      <p>Votre panier est vide</p>
    </Container>
  )

  return (
    <Container fluid>
      { Object.keys(itemsInCart).map((shop_id) => (
        <Container key={shop_id}>
          <ShopCard shop={itemsInCart[shop_id].shop} items={itemsInCart[shop_id].items}/>
        </Container>
      ))}
    </Container>
  )
}

export default Cart;