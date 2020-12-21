/* eslint-disable react/prop-types */
import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ItemCard from './ItemCard';

const ShopCard = ({ shop, items, cart_state }) => (
  <div className="mb-2">
    <Row className="p-3">
      <Link to={`/shop/${shop.id}`} className="text-decoration-none">
        <h5 className="cardlinks cardlinks-black">
          Vos articles auprès de
          {' '}
          { shop.name }
          {' '}
          (
          { shop.zip_code }
          {' '}
          -
          {' '}
          { shop.city }
          )
        </h5>
      </Link>
    </Row>

    { Object.keys(items).map((item_id) => (
      <Row key={item_id} className="justify-content-end">
        <ItemCard item={items[item_id]} shop_id={shop.id} cart_state={cart_state} />
      </Row>
    ))}
  </div>
);

export default ShopCard;
