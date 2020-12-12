/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const DashboardNav = ({ url }) => (
  <Nav variant="tabs" defaultActiveKey={`${url}/my_cmds`}>
    {
      [
        ['auth_infos', 'Informations de connexion'],
        ['perso_infos', 'Informations personnelles'],
        ['my_cmds', 'Mes commandes'],
        ['my_cart', 'Mon panier'],
      ].map(([route, label], indx) => (
        <Nav.Item key={indx}>
          <Nav.Link as={Link} to={`${url}/${route}`}>{label}</Nav.Link>
        </Nav.Item>
      ))
    }
  </Nav>
);

export default DashboardNav;
