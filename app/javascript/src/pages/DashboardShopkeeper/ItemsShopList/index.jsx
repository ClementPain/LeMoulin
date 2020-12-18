import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

import { find, setUrl } from '../../../api/api-manager';
import ItemCardInShopkeeperView from '../../../components/ItemCard/ItemCardInShopkeeperView';

import useDebounce from '../../../tools/useDebounce';

const ItemsShopList = () => {
  const [itemsArray, setItemsArray] = useState([]);
  const [refresh, setRefresh] = useState(null);
  const { shop_id } = useParams();

  const [search, setSearch] = useState({
    keyword: '',
  });
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const url = setUrl(`items?shop_id=${shop_id}&shopkeeper_request=true`, search, false);

    find(url, {
      authRequired: true,
      onSuccess: (response) => {
        setItemsArray([]);
        response?.map((item) => setItemsArray((previousArray) => [...previousArray, item]));
      },
    });
  }, [debouncedSearch, refresh]);

  return (
  <Container fluid>
    <Row>
      <Col sm={3}>
        <Row>
          <Button
            as={Link} to={`/shop/${shop_id}/create_an_item`}
            className='btn btn_success_sass m-4' variant='outline-success'
          >
            Créer un nouveau produit
          </Button>
          <Button
            as={Link} to={`/shop/${shop_id}/orders_tracking`}
            className='m-4' variant='outline-primary'
          >
            Voir la liste des commandes
          </Button>
        </Row>
        <h5 className="text-black pt-4">Filtrer les résultats</h5>
        <Form.Group className="text-white">
          <Form.Control
            className="p-2"
            type="text"
            id="searchBar"
            placeholder="Rechercher..."
            value={search.keyword}
            onChange={(event) => setSearch({ ...search, keyword: event.target.value })}
            />
        </Form.Group>
      </Col>
      <Col sm={9}>
        <Row className="justify-content-center m-4">
          <h3>Liste des produits de votre boutique</h3>
        </Row>
        <Row className="justify-content-center">
          <Col sm={11}>
            { itemsArray.length === 0 && (
              <Row className='m-2'>
                <p>Vous n'avez aucun produit enregistré</p>
              </Row>
            )}
            { itemsArray.length > 0 && itemsArray.map((item) => (
              <Row className='m-2' key={item.id}>
                <ItemCardInShopkeeperView item={item} setRefresh={setRefresh} />
              </Row>      
            )) }
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
  )
}

export default ItemsShopList