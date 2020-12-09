import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

import ItemCard from '../../components/ItemCard'

const ItemsList = () => {
  // let history = useHistory()
  let params = useParams()

  const [itemsArray, setItemsArray] = useState([])
  // const [search, setSearch] = useState({
  //   keyword: history.location.state ? history.location.state.keyword : '',
  //   categories: [],
  // })

  // const [shopCategoriesList, setShopCategoriesList] = useState([])

  // useEffect( () => {
  //   find('shop_categories')
  //     .then((response) => {
  //       response?.map( (category) => {
  //         setShopCategoriesList(previousArray => [category, ...previousArray])
  //       })
  // })

  // useEffect( () => {
  //   fetch('api/v1/shop_categories')
  //     .then((response) => response.json())
  //     .then((response) => {
  //       response?.map( (category) => {
  //         setShopCategoriesList(previousArray => [category, ...previousArray])
  //       })
  //     })
  // }, []);

  useEffect( () => {
    let url = 'http://localhost:3000/api/v1/items'
    let noParameter = true

    if(params.keyword) {
      url += checkForFirstParameter(noParameter)
      noParameter = false
      url += "keyword=" + encodeURIComponent(params.keyword.trim())
    }

    // if(history.location.state?.keyword) {
    //   url += checkForFirstParameter(noParameter)
    //   noParameter = false
    //   url += "keyword=" + encodeURIComponent(history.location.state?.keyword.trim())
    // }

    console.log(url)

    // if(search.categories.length > 0) {
    //   url += checkForFirstParameter(noParameter)
    //   noParameter = false
    //   url += "categories=" + search.categories.join(',')
    // }

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

  // const handleCategoriesFilter = (event) => {
  //   if(event.target.checked) {
  //     setSearch({...search, categories: [...search.categories, event.target.value]})
  //   } else {
  //     if (search.categories.length === 1) {
  //       setSearch({...search, categories: []})
  //     } else {
  //       setSearch({...search, categories: setArray(search.categories, event.target.value)})
  //     }
  //   } 
  // }

  // const setArray = (array, target) => {
  //   let newArray = array
  //   let remove = newArray.splice(newArray.indexOf(target), 1)
  //   return newArray
  // }

  return (
  <Container fluid className='justify-content-center'>
  {/* <Row> */}
    {/* <Col sm={3} className='justify-content-center mt-5'>
      <h5>Filtrer les résultats</h5>
      <Form.Group>
        <Form.Control 
          type="text"
          id="searchBar"
          placeholder="Rechercher..."
          // value={search.keyword}
          // onChange={ (event) => setSearch({...search, keyword: event.target.value}) }
        /> */}
        {/* { shopCategoriesList?.map((cat) => (
          <Form.Check
            key={`${cat.id}`}
            type='checkbox'
            label={`${cat.title}`}
            value={`${cat.title}`}
            onChange={ (event) =>  handleCategoriesFilter(event)}
          />
          ))
        } */}

      {/* </Form.Group>
    </Col> */}
    
    {/* <Col sm={9}> */}
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
    {/* </Col> */}
  {/* </Row> */}
  </Container>
  )
}

export default ItemsList
