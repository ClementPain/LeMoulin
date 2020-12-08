import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'

import ShopCard from '../../components/ShopCard'
import { Form } from 'react-bootstrap'

const ShopsList = () => {
  const [shopsArray, setShopsArray] = useState([])
  const [search, setSearch] = useState('')

  useEffect( () => {
    let url = 'api/v1/shops'
    if(search.length > 0) url += '?keyword=' + search

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setShopsArray([])
        response?.map( (shop) => {
          setShopsArray(previousArray => [shop, ...previousArray])
        })
    })
  }, [search])

  return (
  <Container fluid>
    <Row className='justify-content-center mt-4'>
      <Form.Group>
        <Form.Control 
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={ (event) => setSearch(event.target.value) }
        />
      </Form.Group>
    </Row>
    
    <Row className='justify-content-center m-5'>
      <h4>Voici la liste des magasins</h4>
    </Row>

    <Container>
      { shopsArray.map( (shop) => (
        <div className='mb-2'>
          <ShopCard shop={shop} />
        </div>
      ))}
    </Container>
  </Container>
  )
}

export default ShopsList
