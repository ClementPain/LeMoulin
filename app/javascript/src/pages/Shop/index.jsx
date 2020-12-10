import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'


const Shop= ({ shop }) => (
  <Container style={{ marginTop:20}} >
  <Card>
    <Card.Header style={{ backgroundColor: `#45B5AA`}}>
      <Row>
        <Col sm={12} className="text-center">
          <Card.Title > Shop Name </Card.Title>
        </Col>
        <Col sm={12} className="align-items-end">
        </Col>
      </Row>
    </Card.Header>
    <Card.Body>
      <Card.Text>shop.description </Card.Text>
      <footer className="blockquote-footer">
        shop.address - shop.city
      </footer>
    </Card.Body>
  </Card>
  </Container>
)

export default Shop;