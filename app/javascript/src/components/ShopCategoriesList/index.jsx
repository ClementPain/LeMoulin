import React, { useState, useEffect } from 'react'

import { Container, Row } from 'react-bootstrap'

const ShopCategoriesList = () => {
  const [shopCategoriesArray, setShopCategoriesArray] = useState([])

  useEffect( () => {
    fetch('api/v1/shop_categories')
      .then((response) => response.json())
      .then((response) => {
        response?.map( (category) => {
          setShopCategoriesArray(previousArray => [category, ...previousArray])
        })
      })
  }, []);

  return (
  <main>
    <Row>
      <h4>Voici la liste des catégories</h4>
    </Row>

    <Container>
      { shopCategoriesArray.map( (cat) => (
        <Row key = {cat.id}>
          <p>{ cat.title }</p>
        </Row>
      )
      )}
    </Container>
  </main>
  )
}

export default ShopCategoriesList