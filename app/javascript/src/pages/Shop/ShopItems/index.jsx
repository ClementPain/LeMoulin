/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import {
  Row, Col, Container, Card, Button,
} from 'react-bootstrap';

import ShopItem from '../ShopItem';
import ItemsSearchBar from './ItemsSearchBar';

const ShopItems = ({ shopItemsList }) => {
  const [showLength, setShowLength] = useState(8);
  const [itemsFound, setItemsFound] = useState(null);

  const showMore = () => {
    setShowLength(showLength + 8);
  };

  const handleOnClick = () => { showMore(); };

  useEffect(
    () => setItemsFound(shopItemsList),
    [shopItemsList],
  );

  return (
    <Container className="px-5" fluid>
      <Card className="p-3">
        <Row>
          <Col as="h4" xs={6} className="mb-3">
            {
              itemsFound?.length === 0
                ? 'Aucun resultat'
                : 'Nos produits'
            }
          </Col>
          <Col
            as="h4"
            md={{ span: 3, offset: 3 }}
            className="mb-3 text-right"
          >
            <ItemsSearchBar
              shopItemsList={shopItemsList}
              setItemsFound={setItemsFound}
            />
          </Col>
          {
            itemsFound?.slice(0, showLength).map((item) => (
              <ShopItem key={item.id} item={item} />
            ))
          }
        </Row>
        <Row className="d-flex flex-column">
          {
            showLength < itemsFound?.length && (
              <Button
                variant="primary"
                className="align-self-end"
                onClick={handleOnClick}
              >
                Afficher plus
              </Button>
            )
          }
        </Row>
      </Card>
    </Container>
  );
};

export default ShopItems;
