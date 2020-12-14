import React, { useState, useEffect } from 'react';
import {
  Row, Container, Col
} from 'react-bootstrap';

import Cookie from 'js-cookie';

import { create } from '../../api/api-manager';

const Cart = () => {
  const cart = {};
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
          <h3>
            Vos articles auprès de { itemsInCart[shop_id].shop.name } ({ itemsInCart[shop_id].shop.zip_code } - { itemsInCart[shop_id].shop.city })          
          </h3>

          { Object.keys(itemsInCart[shop_id].items).map( (item_id) => (
            <Row key={item_id}>
              <Col sm={6}>{ itemsInCart[shop_id].items[item_id].data.name }</Col>
              <Col sm={6} className='justify-content-end'>
                <Row>
                  <Col>
                    { itemsInCart[shop_id].items[item_id].in_cart }
                    { itemsInCart[shop_id].items[item_id].in_cart > 1 ? 'articles' : 'article' }
                  </Col>
                  <Col>
                    { itemsInCart[shop_id].items[item_id].data.price * itemsInCart[shop_id].items[item_id].in_cart } €
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
        </Container>
      ))}
    </Container>
  )
}

export default Cart;