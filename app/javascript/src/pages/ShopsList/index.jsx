import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Form, Card,
} from 'react-bootstrap';

import { Link, useHistory } from 'react-router-dom';
import ShopCard from '../../components/ShopCard';

import { find, setUrl } from '../../api/api-manager';
import useDebounce from '../../tools/useDebounce';

const ShopsList = () => {
  const history = useHistory();
  const locationParam = history.location.state?.location ? history.location.state.location.location : "";

  const [shopsArray, setShopsArray] = useState([]);
  const [shopCategoriesList, setShopCategoriesList] = useState([]);
  const [search, setSearch] = useState({
    keyword: '',
    categories: [],
    location: locationParam
  });
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
    const url = setUrl('shops', search);

    find(url, {
      onSuccess: (response) => {
        setShopsArray([]);
        response?.map((shop) => setShopsArray((previousArray) => [shop, ...previousArray]));
        console.log(shopsArray)
      },
    });
  }, [debouncedSearch]);

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
    <Container fluid>
      <Row className="justify-content-center m-4">
        <Col style={{ backgroundColor: '#45B5AA' }} sm={3}>
          <h5 className="text-black pt-4">Filtrer les résultats</h5>
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
          <Row className="justify-content-center m-4">
            <h4 className="text-center">Voici la liste des boutiques</h4>
          </Row>

          <Container style={{ width: '100%', height: 700 }} className="align-self-center overflow-auto">
            { shopsArray.map((shop) => (
              <Link to={`shop/${shop.id}`} key={shop.id} className="cardlinks">
                <div className="mb-2">
                  <ShopCard shop={shop} />
                </div>
              </Link>
            ))}
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ShopsList;
