import React from 'react';
import {
  Card, Col, Row, Container,
} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import ShopImage from './Page-Grise.jpg';

const Shop = () => (
  <Container style={{ marginTop: 20 }}>
    <Card>
      <Card.Header style={{ backgroundColor: '#45B5AA' }}>
        <Col sm={12}>
          <Card.Title>
            <h4 className="text-center text-white"> SHOP NAME</h4>
          </Card.Title>
        </Col>
      </Card.Header>
      <Col sm={12} className="align-items-end" />
      <Card.Body>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src={ShopImage} className="Page-Grise.jpg/171x180" thumbnail />
            </Col>
            <Col xs={6} md={4}>
              <Image src={ShopImage} className="Page-Grise.jpg/171x180" thumbnail />
            </Col>
            <Col xs={6} md={4}>
              <Image src={ShopImage} className="Page-Grise.jpg/171x180" thumbnail />
            </Col>
          </Row>
        </Container>
        <Col>
          <Card.Text>
            <div className="card-title text-center text-primary mt-4"><h5>Description title</h5></div>
            <div className="card-text text-center text-primary"><p>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the Card's content.</p></div>
          </Card.Text>
          <Row>
            <Col className="card-title text-center text-primary mt-4">
              Shop address :
            </Col>
            <Col className="card-title text-center text-primary mt-4">
              Shop city :
            </Col>
            <Col className="card-title text-center text-primary mt-4">
              References  :
            </Col>
          </Row>
        </Col>
      </Card.Body>
    </Card>
  </Container>
);

export default Shop;
