import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormControl, Button } from 'react-bootstrap';
import { find, setUrl } from '../../../api/api-manager';

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
        response?.map((category) => setShopCategoriesList((previousArray) => [category, ...previousArray]));
      },
    });
  }, []);

  const handleSearch = () => {
    history.push({
      pathname: '/itemslist/search',
      search: setUrl('', search),
    });
  };

  return (
    <Form inline>
      <Form.Control
        as="select"
        className="mr-sm-2"
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
        className="mr-sm-2"
        value={search.keyword}
        onChange={(event) => setSearch({ ...search, keyword: event.target.value })}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch(search);
          }
        }}
      />
      <Button
        onClick={(event) => handleSearch(search)}
        variant="outline-success"
      >
        Ok

      </Button>
    </Form>
  );
};

export default SearchBar;
