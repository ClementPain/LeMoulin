import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormControl, Button } from 'react-bootstrap';
import { find, setUrl } from '../../../api/api-manager';
import './index.scss';

const SearchBar = () => {
  const history = useHistory();

  const [shopCategoriesList, setShopCategoriesList] = useState([]);
  const [search, setSearch] = useState({
    keyword: '',
    category: '',
  });

  useEffect(() => {
    find('shop_categories', {
      onSuccess: (response) => {
        response?.map((category) => {
          setShopCategoriesList((previousArray) => [category, ...previousArray]);
        });
      },
    });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    history.push({
      pathname: '/itemslist/search',
      search: setUrl('', search),
    });
  };

  return (
    <Form
      inline
      onSubmit={(event) => handleSearch(event)}
    >
      <Form.Control
        as="select"
        className="mr-sm-2 text-center"
        onChange={(event) => setSearch({ ...search, category: event.target.value })}
      >
        <option value="" key={0}>
          Toute catégorie
        </option>
        { shopCategoriesList.map((cat) => (
          <option value={cat.title} key={cat.id}>
            {cat.title}
          </option>
        ))}
      </Form.Control>
      <FormControl
        type="text"
        placeholder="Rechercher un produit"
        className="mr-sm-1"
        value={search.keyword}
        onChange={(event) => setSearch({ ...search, keyword: event.target.value })}
      />
      <Button type="submit" className="btn_success_sass" variant="outline-success">Ok</Button>
    </Form>
  );
};

export default SearchBar;
