import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { find, setUrl } from '../../../api/api-manager';
import useDebounce from '../../../tools/useDebounce';

import { Container, Row, Col, Form } from 'react-bootstrap';
import ItemCard from '../../../components/ItemCard';

const ItemsList = () => {
  const history = useHistory();
  const searchUrl = history.location.search;
  const [search, setSearch] = useState({
    keyword: '',
    categories: [],
    location: '' 
  });
  const [itemsArray, setItemsArray] = useState([]);
  const [shopCategoriesList, setShopCategoriesList] = useState([]);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    find('shop_categories', {
      onSuccess: (response) => {
        response?.map((category) => {
          setShopCategoriesList((previousArray) => [category, ...previousArray]);
        });
      },
    });
  }, []);

  useEffect(() => {
    const url = setUrl(`/api/v1/items${searchUrl}`, search, searchUrl.length > 0 ? false : true);

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setItemsArray([]);
        response?.map((item) => setItemsArray((previousArray) => [...previousArray, item]));
      });
  }, [searchUrl, debouncedSearch]);

  const setArray = (array, target) => {
    const newArray = array;
    const remove = newArray.splice(newArray.indexOf(target), 1);
    return newArray;
  };

  const handleCategoriesFilter = (event) => {
    if (event.target.checked) {
      setSearch({ ...search, categories: [...search.categories, event.target.value] });
    } else if (search.categories.length === 1) {
      setSearch({ ...search, categories: [] });
    } else {
      setSearch({ ...search, categories: setArray(search.categories, event.target.value) });
    }
  };
  
  return (
    <Container fluid className="justify-content-center">
      <Row className="justify-content-center m-5">
        <h4>Voici la liste des produits</h4>
      </Row>

      <Row>
        <Col style={{ backgroundColor: '#45B5AA' }} sm={3}>
          <h5 className="text-black pt-5">Filtrer les résultats</h5>
          <Form.Group className="text-white">
            <Form.Control
              className="p-2"
              type="text"
              id="searchBar"
              placeholder="Rechercher par mot clef..."
              value={search.keyword}
              onChange={(event) => setSearch({ ...search, keyword: event.target.value })}
            />
          </Form.Group>
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
          <Form.Group className="text-white">
            { shopCategoriesList?.map((cat) => (
              <Form.Check
                className="m-2 p-2"
                key={`${cat.id}`}
                type="checkbox"
                label={`${cat.title}`}
                value={`${cat.title}`}
                onChange={(event) => handleCategoriesFilter(event)}
              />
            ))}
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
