import React from 'react'
import { Card } from 'react-bootstrap'

const ShopCard = ({ shop }) => (
  <Card>
    <Card.Header>{ shop.name }</Card.Header>
    <Card.Body>
      <Card.Text>{ shop.description }</Card.Text>
      <footer className="blockquote-footer">
        {shop.address} - {shop.city}
      </footer>
    </Card.Body>
  </Card>
)

export default ShopCard
