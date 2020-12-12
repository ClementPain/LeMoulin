import React from 'react';
import {
  Col, Row, Container, Button
} from 'react-bootstrap';

import  { Link } from 'react-router-dom';

import TabsMoreInformations from './TabsMoreInformations'

const ItemInformations = ({item}) => {
  console.log(item)

  return (
  <Container>
    <Row className="justify-content-center">
      <h2>{ item.name }</h2>
    </Row>
    <Row className="justify-content-end">
      <Link to={`shop/${item.shop?.id}`} className="cardlinks cardlinks-black">
        <p>En vente chez - { item.shop?.name }</p>
      </Link>
    </Row>
    <Row className="justify-content-end">
      <p>{ item.shop_categories?.map( (cat) => cat.title ).join(', ') }</p>
    </Row>
    <Row>
      <p id="price">{ item.price } €</p>
    </Row>
    <Row className="justify-content-center mb-5">
      <Button className='btn_success_sass' variant='outline-success'>
        Ajouter au panier
      </Button>
    </Row>
    <Row className='mt-4'>
      <TabsMoreInformations item={item} />
    </Row>
  </Container>
  )
}

export default ItemInformations