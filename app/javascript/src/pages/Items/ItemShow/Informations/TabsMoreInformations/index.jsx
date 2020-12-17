import React from 'react';
import {
  Tab, Row, Col, Nav,
} from 'react-bootstrap';

const TabsMoreInformation = ({ item }) => (
  <Tab.Container defaultActiveKey="item_description">
    <Row>
      <Col sm={3}>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link eventKey="item_description">Informations sur le produit</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="shop_description">Informations sur la boutique</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="address">Adresse de la boutique</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={9}>
        <Tab.Content>
          <Tab.Pane eventKey="item_description" className="align-text-center">
            <p className="long_text">{ item.description }</p>
          </Tab.Pane>
          <Tab.Pane eventKey="shop_description" className="align-text-center">
            <p className="long_text">{ item.shop?.description }</p>
          </Tab.Pane>
          <Tab.Pane eventKey="address">
            <Row>
              { item.shop?.address }
            </Row>
            <Row>
              { item.shop?.zip_code }
              {' '}
              -
              {' '}
              { item.shop?.city }
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
);

export default TabsMoreInformation;
