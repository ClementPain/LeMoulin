/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import {
  Row, Container, Button, Form,
} from 'react-bootstrap';

import Cookie from 'js-cookie';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { UpdateItemButton } from '../../../../components/ItemCard/ItemButtons';
import TabsMoreInformations from './TabsMoreInformations';

import CartGlobalQuantityContext from '../../../TheMill/context';

const ItemInformations = ({ item, alert }) => {
  const [nbItemToAddToCart, setNbItemToAddToCart] = useState(1);
  const { currentUserId, isAuthenticated } = useSelector((state) => state);
  const { computeCartGlobalQuantity } = useContext(CartGlobalQuantityContext);

  const handleCartCookie = () => {
    const cartCookie = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')) : {};

    if (Object.keys(cartCookie)?.includes(item.shop.id.toString())) {
      if (Object.keys(cartCookie[item.shop.id])?.includes(item.id.toString())) {
        cartCookie[item.shop.id][item.id] = parseInt(cartCookie[item.shop.id][item.id]) + parseInt(nbItemToAddToCart);
      } else {
        cartCookie[item.shop.id][item.id] = nbItemToAddToCart;
      }
    } else {
      cartCookie[item.shop.id] = {};
      cartCookie[item.shop.id][item.id] = nbItemToAddToCart;
    }

    return cartCookie;
  };

  const handleCart = (event, alert) => {
    event.preventDefault();
    Cookie.set('cart', JSON.stringify(handleCartCookie()));
    alert();

    computeCartGlobalQuantity();
  };

  return (
    <Container>
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
          { isAuthenticated && (
            <Button
              className="btn_success_sass"
              variant="outline-success"
              onClick={(event) => handleCart(event, alert)}
            >
              Ajouter au panier
            </Button>
          )}
        </Form>
      </Row>
      <Row className="mt-4">
        <TabsMoreInformations item={item} />
      </Row>

      { currentUserId === item?.shop?.shopkeeper_id && (
        <Row className="p-5 justify-content-end">
          <UpdateItemButton item={item} />
        </Row>
      )}
    </Container>
  );
};

export default ItemInformations;
