/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const DashboardNav = ({ url }) => (
  <Nav variant="pills" defaultActiveKey={`${url}/my_cart`}>
    {
      [
        ['my_cart', 'Mon panier'],
        ['my_cmds', 'Mes commandes'],
        ['perso_infos', 'Modifier mon profil'],
        ['auth_infos', 'Pamètres de connexion'],
      ].map(([route, label], indx) => (
        <Nav.Item key={indx}>
          <Nav.Link as={Link} to={`${url}/${route}`} href={`${url}/${route}`}>{label}</Nav.Link>
        </Nav.Item>
      ))
    }
  </Nav>
);

export default DashboardNav;
