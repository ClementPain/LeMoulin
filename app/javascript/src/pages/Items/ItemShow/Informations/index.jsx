import React, { useState } from 'react';
import {
  Row, Container, Button, Form,
} from 'react-bootstrap';

import Cookie from 'js-cookie';

import { Link } from 'react-router-dom';

import TabsMoreInformations from './TabsMoreInformations';

const ItemInformations = ({ item }) => {
  const [nbItemToAddToCart, setNbItemToAddToCart] = useState(1);

  const handleCart = () => {
    event.preventDefault();

    const cartCookie = handleCartCookie();
    console.log(cartCookie);

    Cookie.set('cart', JSON.stringify(handleCartCookie()));
  };

  const handleCartCookie = () => {
    const cartCookie = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')) : {};

    if (Object.keys(cartCookie)?.includes(item.shop.id.toString())) {
      console.log('shop already there');
      if (Object.keys(cartCookie[item.shop.id])?.includes(item.id.toString())) {
        console.log('item already there');
        cartCookie[item.shop.id][item.id] = parseInt(cartCookie[item.shop.id][item.id]) + parseInt(nbItemToAddToCart);
        console.log(cartCookie[item.shop.id][item.id]);
      } else {
        console.log('new item');
        cartCookie[item.shop.id][item.id] = nbItemToAddToCart;
      }
    } else {
      console.log('new shop');
      cartCookie[item.shop.id] = {};
      cartCookie[item.shop.id][item.id] = nbItemToAddToCart;
    }

    return cartCookie;
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <h2>{ item.name }</h2>
      </Row>
      <Row className="justify-content-end">
        <Link to={`/shop/${item.shop?.id}`} className="cardlinks cardlinks-black">
          <p>
            En vente chez -
            {' '}
            { item.shop?.name }
          </p>
        </Link>
      </Row>
      <Row className="justify-content-end">
        <p>{ item.shop_categories?.map((cat) => cat.title).join(', ') }</p>
      </Row>
      <Row>
        <p id="price">
          { item.price }
          {' '}
          €
        </p>
      </Row>
      <Row>
        <p id="stock">
          { item.stock }
          {' '}
          { item.stock > 1 ? 'produits disponibles' : 'produit disponible' }
        </p>
      </Row>
      <Row className="justify-content-center mb-5">
        <Form inline>
          <Form.Control
            type="number"
            min={1}
            max={item.stock}
            value={nbItemToAddToCart}
            onChange={(event) => setNbItemToAddToCart(event.target.value)}
          />
          <Button
            className="btn_success_sass"
            variant="outline-success"
            onClick={(event) => handleCart()}
          >
            Ajouter au panier
          </Button>
        </Form>
      </Row>
      <Row className="mt-4">
        <TabsMoreInformations item={item} />
      </Row>
    </Container>
  );
};

export default ItemInformations;
