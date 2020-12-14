import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import Icons from '../Social-icons/index';

const Footer = () => (
  <Container style={{ paddingTop: '120px' }}>
    <footer className="fixed-bottom bg-primary text-white text-center p-3">
      <Row>
        <Col>
          <ul className="list-unstyled list-inline text-center mt-2">
            <li className="list-inline-item">
              <h6 className="text-white">Inscrivez-vous </h6>
            </li>
            <li className="list-inline-item  text-white">
              <Button type="submit" className="btn_success_sass" variant="outline-success" size="sm">Register</Button>
            </li>
          </ul>
        </Col>
        <Col>
          <Icons />
        </Col>
        <Col>
          <div className="title mt-3"><small>&copy; Copyright 2020, Le Moulin, Tous les droits sont réservés.</small></div>
        </Col>
      </Row>
    </footer>
  </Container>
);

export default Footer;
