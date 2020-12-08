import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ShopCard from '../../components/ShopCard'
import { Form } from 'react-bootstrap'

const ShopsList = () => {
  const [shopsArray, setShopsArray] = useState([])
  const [search, setSearch] = useState({
    keyword: '',
    categories: [],
  })

  const [shopCategoriesList, setShopCategoriesList] = useState([])

  // useEffect( () => {
  //   find('shop_categories')
  //     .then((response) => {
  //       response?.map( (category) => {
  //         setshopCategoriesList(previousArray => [category, ...previousArray])
  //       })
  // })

  useEffect( () => {
    fetch('api/v1/shop_categories')
      .then((response) => response.json())
      .then((response) => {
        response?.map( (category) => {
          setShopCategoriesList(previousArray => [category, ...previousArray])
        })
      })
  }, []);

  useEffect( () => {
    let url = 'api/v1/shops'
    let noParameter = true

    console.log(search.categories)

    if(search.keyword.length > 0) {
      url += checkForFirstParameter(noParameter)
      noParameter = false
      url += "keyword=" + search.keyword
    }

    if(search.categories.length > 0) {
      url += checkForFirstParameter(noParameter)
      noParameter = false
      url += "categories=" + search.categories.join(',')
    }

    console.log(url)

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setShopsArray([])
        response?.map( (shop) => {
          shop.isActive = false
          setShopsArray(previousArray => [shop, ...previousArray])
        })
    })
  }, [search])

  const setUrl = (url) => {
    
  }

  const checkForFirstParameter = (noParameter) => {
    if (noParameter) {
      return '?'
    } else  {
      return '&&'
    }
  }

  const handleCategoriesFilter = (event) => {
    if(event.target.checked) {
      setSearch({...search, categories: [...search.categories, event.target.value]})
    } else {
      if (search.categories.length === 1) {
        setSearch({...search, categories: []})
      } else {
        setSearch({...search, categories: setArray(search.categories, event.target.value)})
      }
    } 
  }

  const setArray = (array, target) => {
    let newArray = array
    let remove = newArray.splice(newArray.indexOf(target), 1)
    return newArray
  }

  return (
  <Container fluid>
  <Row>
    <Col sm={3} className='justify-content-center mt-5'>
      <h5>Filtrer les résultats</h5>
      <Form.Group>
        <Form.Control 
          type="text"
          id="searchBar"
          placeholder="Rechercher..."
          value={search.keyword}
          onChange={ (event) => setSearch({...search, keyword: event.target.value}) }
        />
        { shopCategoriesList?.map((cat) => (
          <Form.Check
            key={`${cat.id}`}
            type='checkbox'
            label={`${cat.title}`}
            value={`${cat.title}`}
            onChange={ (event) =>  handleCategoriesFilter(event)}
          />
          ))
        }

      </Form.Group>
    </Col>
    
    <Col sm={9}>
      <Row className='justify-content-center m-5'>
        <h4>Voici la liste des magasins</h4>
      </Row>

      <Container>
        { shopsArray.map( (shop) => (
          <div className='mb-2' key={shop.id}>
            <ShopCard shop={shop} />
          </div>
        ))}
      </Container>
    </Col>
  </Row>
  </Container>
  )
}

export default ShopsList



