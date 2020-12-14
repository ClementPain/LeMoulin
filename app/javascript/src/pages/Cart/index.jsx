import React, { useState, useEffect } from 'react';
import {
  Row, Container
} from 'react-bootstrap';

import Cookie from 'js-cookie';

import { find } from '../../api/api-manager';

const Cart = () => {
  const cart = JSON.parse(Cookie.get('cart'));
  const [itemsInCart, setItemsInCart] = useState([]);

  useEffect(() => {
    find('items', {
      onSuccess: (response) => {
        response?.map( (shop) => setItemsInCart((previousArray) => [shop, ...previousArray]))
    }})
  }, [])

  return (
    <Container fluid>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </Container>
  )
}

export default Cart;