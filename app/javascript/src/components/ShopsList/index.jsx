import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'

const ShopsList = () => {
  const [shopsArray, setShopsArray] = useState([])

  useEffect( () => {
    fetch('api/v1/shops')
      .then((response) => response.json())
      .then((response) => {
        response?.map( (shop) => {
          setShopsArray(previousArray => [shop, ...previousArray])
        })
      })
  }, [])

  return (
  <main>
    <Row>
      <h4>Voici la liste des magasins</h4>
    </Row>

    <Container>
      { shopsArray.map( (shop) => (
        <Row key = {shop.id}>
          <p>{ shop.name }</p>
        </Row>
      )
      )}
    </Container>
  </main>
  )
}

export default ShopsList
