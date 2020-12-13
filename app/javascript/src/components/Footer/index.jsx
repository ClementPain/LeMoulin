import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <Container style={{ paddingTop: '70px' }}>
    <footer className="fixed-bottom bg-primary text-white text-center p-3">
      <Row>
        <Col>
          <div className="title">Title1</div>
        </Col>
        <Col>
          <div className="title">Title2</div>
        </Col>
        <Col>
          <div className="title">Title3</div>
        </Col>
      </Row>
    </footer>
  </Container>
  // <div className="fixed-bottom">
  //   <nav className="navbar navbar-expand-lg bg-primary text-white text-center">
  //     <div className="col">
  //       <div className="title">Title1</div>
  //     </div>
  //     <div className="col">
  //       <div className="title">Title2</div>
  //     </div>
  //     <div className="col">
  //       <div className="title">Title3</div>
  //     </div>
  //   </nav>
  // </div>
);

export default Footer;
