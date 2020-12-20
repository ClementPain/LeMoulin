/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import { Form } from 'react-bootstrap';

const ItemsSearchBar = ({ shopItemsList, setItemsFound }) => {
  const [keywords, setKeywords] = useState(null);

  const handleOnChange = (e) => {
    setKeywords(e.target.value);
  };

  const searchItems = () => {
    let keywordsAry = keywords.split(' ');
    keywordsAry = keywordsAry.map((keyword) => keyword.toLowerCase());

    const search = (prevKeyword, keyword, collection) => collection.filter(
      ({ name }) => name.toLowerCase().substring(name.toLowerCase().indexOf(prevKeyword)).replace(prevKeyword, '').includes(keyword),
    );

    let prevKeyword = '';
    let searchResult = shopItemsList;

    keywordsAry.forEach((keyword) => {
      searchResult = search(prevKeyword, keyword, searchResult);
      prevKeyword = keyword;
    });

    return searchResult;
  };

  const updateSearchResult = () => {
    if (keywords) {
      setItemsFound(searchItems());
    } else {
      setItemsFound(shopItemsList);
    }
  };

  useEffect(
    updateSearchResult,
    [keywords],
  );

  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Entrez des mots clés"
        onChange={handleOnChange}
      />
    </Form>
  );
};

export default ItemsSearchBar;
