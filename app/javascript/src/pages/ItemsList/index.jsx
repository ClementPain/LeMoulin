import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

import ItemCard from '../../components/ItemCard'

const ItemsList = () => {
  let params = useParams()

  const [itemsArray, setItemsArray] = useState([])

  useEffect( () => {
    let url = 'http://localhost:3000/api/v1/items'
    let noParameter = true

    if(params.keyword) {
      url += checkForFirstParameter(noParameter)
      noParameter = false
      url += "keyword=" + encodeURIComponent(params.keyword.trim())
    }

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setItemsArray([])
        response?.map( (item) => {
          setItemsArray(previousArray => [item, ...previousArray])
        })
    })
  }, [])

  // const setUrl = (url) => {
    
  // }

  const checkForFirstParameter = (noParameter) => {
    if (noParameter) {
      return '?'
    } else  {
      return '&&'
    }
  }

  return (
  <Container fluid className='justify-content-center'>
    <Row className='justify-content-center m-5'>
      <h4>Voici la liste des produits</h4>
    </Row>

    <Row style={{ width: '100%' }} className='align-self-center'>
      { itemsArray.map( (item) => (
        <Col sm={4} className='p-2' key={item.id}>
          <ItemCard item={item} />
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default ItemsList
