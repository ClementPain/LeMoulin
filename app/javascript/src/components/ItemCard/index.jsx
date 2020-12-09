import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const ItemCard = ({ item }) => (
  <Card>
    <Card.Img variant="top" />
    <Card.Body>
      <Card.Title>{ item.name }</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        { item.shop_categories.map( (cat) => cat.title ).join(', ') }
      </Card.Subtitle>
      <Card.Text>
        { item.description.length <= 100 ? item.description : item.description.slice(0, 99) + '...' }
      </Card.Text>
      <footer className="blockquote-footer">
        {item.shop.name} - {item.shop.address}, {item.shop.city} 
      </footer>
    </Card.Body>
  </Card>
)

export default ItemCard
