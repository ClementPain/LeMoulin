import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import ItemCard from '../../components/ItemCard';

const ItemsList = () => {
  const history = useHistory();
  const searchUrl = history.location.search;

  const [itemsArray, setItemsArray] = useState([]);

  useEffect(() => {
    const url = `/api/v1/items${searchUrl}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setItemsArray([]);
        response?.map((item) => {
          setItemsArray((previousArray) => [item, ...previousArray]);
        });
      });
  }, [searchUrl]);

  return (
    <Container fluid className="justify-content-center">
      <Row className="justify-content-center m-5">
        <h4>Voici la liste des produits</h4>
      </Row>

      <Row style={{ width: '100%' }} className="align-self-center">
        { itemsArray.map((item) => (
          <Col sm={4} className="p-2" key={item.id}>
            <ItemCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemsList;
