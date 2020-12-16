/* eslint-disable react/prop-types */
import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import Bin from './delete.png';

const ItemCard = ({ item, shop_id, cart_state }) => {
  let cart = {};
  if (Cookie.get('cart')) cart = JSON.parse(Cookie.get('cart'));

  const handleDelete = () => {
    delete cart[shop_id][item.data.id];
    if (Object.entries(cart[shop_id]).length === 0) {
      delete cart[shop_id];
    }
    Cookie.set('cart', JSON.stringify(cart));
    cart_state(cart);
  };

  return (
    <>
      <Col sm={6}>
        <Link to={`/shop/${shop_id}/item/${item.data.id}`} className="cardlinks cardlinks-black">
          { item.data.name }
        </Link>
      </Col>
      <Col sm={2} className="text-right pr-2">
        <p>
          { item.in_cart }
          {' '}
          { item.in_cart > 1 ? 'articles' : 'article' }
        </p>
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
