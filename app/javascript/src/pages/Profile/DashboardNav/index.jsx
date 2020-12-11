/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DashboardNav = ({ url }) => (
  <Card>
    <ListGroup variant="flush">
      <ListGroup.Item active>Tableau de bord</ListGroup.Item>
      {
        [
          ['auth_infos', 'Informations de connexion'],
          ['perso_infos', 'Informations personnelles'],
          ['my_cmds', 'Mes commandes'],
          ['my_cart', 'Mon panier'],
          ['create_my_shop', 'Créer ma boutique'],
        ].map(([route, label], indx) => (
          <ListGroup.Item key={indx} as={Link} to={`${url}/${route}`} action>{label}</ListGroup.Item>
        ))
      }
    </ListGroup>
  </Card>
);

export default DashboardNav;
