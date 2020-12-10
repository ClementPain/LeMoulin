import React from 'react'
import { Card, Col, Row, Container, Jumbotron } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import ShopImage from './Page-Grise.jpg'
const Shop= ({ shop }) => (
  <Container style={{ marginTop:20}} >
  <Card>
    <Card.Header style={{ backgroundColor: `#45B5AA`}}>
        <Col sm={12}>
          <Card.Title>
            <h4 className="text-center text-white"> SHOP NAME</h4>
            </Card.Title>
        </Col>
      </Card.Header>
        <Col sm={12} className="align-items-end">
        </Col>
    <Card.Body>
    <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src= {ShopImage} className="Page-Grise.jpg/171x180"  thumbnail  />
    </Col>
    <Col xs={6} md={4}>
      <Image src= {ShopImage} className="Page-Grise.jpg/171x180" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image src= {ShopImage} className="Page-Grise.jpg/171x180" thumbnail />
    </Col>
  </Row>
</Container>
   <Col>
      <Card.Text>shop.description </Card.Text>
      <footer className="blockquote-footer">
        shop.address - shop.city
      </footer>
      </Col>
    </Card.Body>
  </Card>
  </Container>
)

export default Shop;