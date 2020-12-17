import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';
import useDebounce from '../../../tools/useDebounce';

import ItemCard from '../../../components/ItemCard';

const ItemsList = () => {
  const history = useHistory();
  const searchUrl = history.location.search;
  const [search, setSearch] = useState({ location: '' });
  const [itemsArray, setItemsArray] = useState([]);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    let url = `/api/v1/items${searchUrl}`;

    if (search.location.length > 0) {
      if (searchUrl.length > 0) {
        url += '&&';
      } else {
        url += '?'
      }

      url += `&&location=${search.location}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setItemsArray([]);
        response?.map((item) => setItemsArray((previousArray) => [...previousArray, item]));
      });
  }, [searchUrl, debouncedSearch]);

  return (
    <Container fluid className="justify-content-center">
      <Row className="justify-content-center m-5">
        <h4>Voici la liste des produits</h4>
      </Row>

      <Row>
        <Col style={{ backgroundColor: '#45B5AA' }} sm={3}>
          <h5 className="text-black pt-4">Filtrer les résultats</h5>
          <Form.Group className="text-white">
            <Form.Control
              className="p-2"
              type="text"
              id="searchBar"
              placeholder="Rechercher par ville (ou code postale)..."
              value={search.location}
              onChange={(event) => setSearch({ ...search, location: event.target.value })}
            />
          </Form.Group>
        </Col>

        <Col sm={9}>
          <Row style={{ width: '100%', height: 700 }} className="align-self-center overflow-auto">
            { itemsArray.map((item) => (
              <Col sm={4} className="p-2" key={item.id}>
                <ItemCard item={item} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemsList;
