import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap'

import { find } from '../../../api/api-manager';
import ItemCardInShopkeeperView from '../../../components/ItemCard/ItemCardInShopkeeperView';

const ItemsShopList = () => {
  const [itemsArray, setItemsArray] = useState([]);
  const { shop_id } = useParams();

  useEffect(() => find(`items?shop_id=${shop_id}&shopkeeper_request=true`, {
    authRequired: true,
    onSuccess: (response) => {  
      setItemsArray([]);
      response?.map((item) => setItemsArray((previousArray) => [...previousArray, item]));
    }
  }), []);

  return (
  <Container fluid>
    <Row className="justify-content-center m-4">
      <h3>Liste des produits de votre boutique</h3>
    </Row>
    <Row className="justify-content-center">
      <Col sm={8}>
        { itemsArray.length > 0 && itemsArray.map((item) => (
          <Row className='m-2'>
            <ItemCardInShopkeeperView item={item} />
          </Row>      
        )) }
      </Col>
    </Row>
  </Container>
  )
}

export default ItemsShopList