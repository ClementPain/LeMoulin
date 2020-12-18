import React from 'react';
import { useSelector } from 'react-redux';

import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import Icons from '../Social-icons/index';
import Notification from '../Notification';

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state);

  return (
  <Container style={{ paddingTop: '120px' }}>
    <footer className="fixed-bottom bg-primary text-white text-center p-3">
      <Row>
        <Col>
          <div className="title mt-3"><small>&copy; Copyright 2020, Le Moulin, Tous les droits sont réservés.</small></div>
        </Col>
        <Col>
          <Icons />
        </Col>
        <Col>
          { isAuthenticated && (
            <Notification />
          )}
          { !isAuthenticated && (
            <ul className="list-unstyled list-inline text-center mt-2">
              <li className="list-inline-item">
                <h6 className="text-white">Inscrivez-vous </h6>
              </li>
              <li className="list-inline-item  text-white">
                <Button type="submit" className="btn_success_sass" variant="outline-success" size="sm">Register</Button>
              </li>
            </ul>
          )}
        </Col>
      </Row>
    </footer>
  </Container>
  )
}

export default Footer;
