import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'


const ShopComponent= ({ shop }) => (
  <Card>
    <Card.Header>
      <Row>
        <Col sm={6}>
          <Card.Title>{ shop.name }</Card.Title>
        </Col>
        <Col sm={6} className="align-items-end">
          {shop.shop_categories.map( (cat) => (
            cat.title
          ))}
        </Col>
      </Row>
    </Card.Header>
    <Card.Body>
      <Card.Text>{ shop.description }</Card.Text>
      <footer className="blockquote-footer">
        {shop.address} - {shop.city}
      </footer>
    </Card.Body>
  </Card>
)

export default ShopComponent;