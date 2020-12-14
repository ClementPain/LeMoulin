import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icons from '../Social-icons/index';

const Footer = () => (
  <Container style={{ paddingTop: '70px' }}>
    <footer className="fixed-bottom bg-primary text-white text-center p-3">
      <Row>
        <Col>
          <div className="title">Title1</div>
        </Col>
        <Col>
          <Icons />
        </Col>
        <Col>
          <div className="title">Title3</div>
        </Col>
      </Row>
    </footer>
  </Container>
);

export default Footer;
