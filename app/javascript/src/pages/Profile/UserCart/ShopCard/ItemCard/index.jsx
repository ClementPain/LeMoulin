/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Cookie from 'js-cookie';
import { Col } from 'react-bootstrap';

import Bin from './delete.png';
import CartGlobalQuantityContext from '../../../../TheMill/context';

const ItemCard = ({ item, shop_id, cart_state }) => {
  const { computeCartGlobalQuantity } = useContext(CartGlobalQuantityContext);

  let cart = {};
  if (Cookie.get('cart')) {
    cart = JSON.parse(Cookie.get('cart'));
    if (item.data.stock < cart[shop_id][item.data.id]) {
      cart[shop_id][item.data.id] = item.data.stock;
      Cookie.set('cart', cart);
    }
  }

  const handleDelete = () => {
    delete cart[shop_id][item.data.id];
    if (Object.entries(cart[shop_id]).length === 0) {
      delete cart[shop_id];
    }
    Cookie.set('cart', JSON.stringify(cart));
    cart_state(cart);

    computeCartGlobalQuantity();
  };

  return (
    <>
      <Col sm={6}>
        <Link to={`/shop/${shop_id}/item/${item.data.id}`} className="cardlinks cardlinks-black text-decoration-none">
          { item.data.name }
        </Link>
      </Col>
      <Col sm={2} className="text-right pr-2">
        { item.in_cart <= item.data.stock && (
          <p>{ item.in_cart > 1 ? `${item.in_cart} articles` : `${item.in_cart} article` }</p>
        )}
        { item.in_cart > item.data.stock && (
          <p>
            Plus
            {' '}
            {item.data.stock > 1
              ? `que ${item.data.stock} articles disponibles`
              : item.data.stock === 1 ? "qu'un article disponible"
                : 'aucun article disponible'}

          </p>
        )}
      </Col>
      <Col sm={3} className="text-right pr-2">
        <p>
          { parseFloat(item.data.price * parseInt(item.in_cart)).toFixed(2) }
          {' '}
          €
        </p>
      </Col>
      <Col sm={1} className="text-right pr-2">
        <img
          src={Bin}
          alt="Bin"
          className="bin"
          style={{ height: 30 }}
          onClick={() => handleDelete()}
        />
      </Col>
    </>
  );
};

export default ItemCard;
