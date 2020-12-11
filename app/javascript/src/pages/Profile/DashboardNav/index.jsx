import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DashboardNav = () => (
  <Card>
    <ListGroup variant="flush">
      <ListGroup.Item active>Tableau de bord</ListGroup.Item>
      <ListGroup.Item action as={Link} to="#">Informations de connexion</ListGroup.Item>
      <ListGroup.Item action as={Link} to="#">Informations personnelles</ListGroup.Item>
    </ListGroup>
  </Card>
);

export default DashboardNav;
