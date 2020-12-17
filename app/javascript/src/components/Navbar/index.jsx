import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Cookie from 'js-cookie';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { find } from '../../api/api-manager';
import SearchBar from './SearchBar';

import Logo from '../Logo';
import CaddyIcon from '../Caddy/index';

const NavBar = () => {
  const { isAuthenticated } = useSelector((state) => state);
  const { currentUserId } = useSelector((state) => state);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(
    () => {
      if (currentUserId) {
        find(`users/${currentUserId}`, {
          authRequired: true,
          onSuccess: (user) => setCurrentUser(user),
        });
      }
    }, [currentUserId],
  );

  const [nbItemInCart, setNbItemInCart] = useState(0);

  // useEffect(() => {
  //   Object.keys(Cookie.get('cart')).map( (shop_id) => {
  //     Object.keys(Cookie.get('cart')[shop_id]).map( () => {
  //       setNbItemInCart(nbItemInCart);
  //     })
  //   })
  // }, [Cookie.get('cart')])

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Acceuil</Nav.Link>
          <Nav.Link as={Link} to="/shopslist">Boutiques</Nav.Link>
          <Nav.Link as={Link} to="/itemslist">Produits</Nav.Link>
          <Nav.Link as={Link} to="/aboutus">A propos</Nav.Link>
          {
          !isAuthenticated
          && (
            <NavDropdown title="Rejoignez nous" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/register">Inscription</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login">Connexion</NavDropdown.Item>
            </NavDropdown>
          )
        }
          {
          isAuthenticated
          && (
            <NavDropdown title="Mon Compte" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/profile">Mon Profil</NavDropdown.Item>
              { currentUser?.shop && (
                <NavDropdown.Item as={Link} to={`/shop/${currentUser.shop.id}`}>
                  Ma boutique
                </NavDropdown.Item>
              )}
              <NavDropdown.Item as={Link} to="/logout">Déconnexion</NavDropdown.Item>
            </NavDropdown>
          )
        }
          <Navbar.Brand as={Link} to="/profile/my_cart">
            <CaddyIcon />
          </Navbar.Brand>
        </Nav>
        <SearchBar />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
