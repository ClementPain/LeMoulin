import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ItemCard = ({item}) => (
  <>
    <Col sm={6}>{ item.data.name }</Col>
      <Col sm={6} className='justify-content-end'>
        <Row>
          <Col>
            { item.in_cart }
            { item.in_cart > 1 ? 'articles' : 'article' }
          </Col>
        <Col>
          { item.data.price * item.in_cart } €
        </Col>
      </Row>
    </Col>
  </>
)

export default ItemCard;