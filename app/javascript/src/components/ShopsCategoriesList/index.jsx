import React, { useState, useEffect } from 'react'

import { Container, Row } from 'react-bootstrap'

const ShopsCategoriesList = () => {
  const [shopsCategoriesArray, setShopsCategoriesArray] = useState([])

  useEffect( () => {
    fetch('api/v1/shops_categories')
      .then((response) => response.json())
      .then((response) => {
        response?.map( (category) => {
          setShopsCategoriesArray(previousArray => [category, ...previousArray])
        })
      })
  }, []);

  return (
  <main>
    <Row>
      <h4>Voici la liste des catégories</h4>
    </Row>

    <Container>
      { shopsCategoriesArray.map( (cat) => (
        <Row key = {cat.id}>
          <p>{ cat.title }</p>
        </Row>
      )
      )}
    </Container>
  </main>
  )
}

export default ShopsCategoriesList