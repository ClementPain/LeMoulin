import React, { useState } from 'react';
import {
  Row, Container, Button, Form,
} from 'react-bootstrap';

import Cookie from 'js-cookie';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UpdateItemButton } from '../../../../components/ItemCard/ItemButtons';

import TabsMoreInformations from './TabsMoreInformations';

const ItemInformations = ({ item , alert}) => {
  const [nbItemToAddToCart, setNbItemToAddToCart] = useState(1);
  const { currentUserId } = useSelector((state) => state);

  const handleCart = (event, alert) => {
    event.preventDefault();
    Cookie.set('cart', JSON.stringify(handleCartCookie()));
    alert();
  };

  const handleCartCookie = () => {
    const cartCookie = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')) : {};

    if (Object.keys(cartCookie)?.includes(item.shop.id.toString())) {
      if (Object.keys(cartCookie[item.shop.id])?.includes(item.id.toString())) {
        cartCookie[item.shop.id][item.id] = parseInt(cartCookie[item.shop.id][item.id]) + parseInt(nbItemToAddToCart);
        console.log(cartCookie[item.shop.id][item.id]);
      } else {
        cartCookie[item.shop.id][item.id] = nbItemToAddToCart;
      }
    } else {
      cartCookie[item.shop.id] = {};
      cartCookie[item.shop.id][item.id] = nbItemToAddToCart;
    }

    return cartCookie;
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
          <Button
            className="btn_success_sass"
            variant="outline-success"
            onClick={(event) => handleCart(event, alert)}
          >
            Ajouter au panier
          </Button>
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
