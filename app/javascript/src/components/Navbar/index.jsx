import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import SearchBar from './SearchBar';

import Logo from '../Logo';

const NavBar = () => {
  const { isAuthenticated } = useSelector((state) => state);

  return (
  <Navbar bg="primary" variant="dark" expand="lg">
    <Navbar.Brand href="/">
      <Logo />
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/shopslist">Boutiques</Nav.Link>
        <Nav.Link as={Link} to="/itemslist">Produits</Nav.Link>
        <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
        <Nav.Link as={Link} to="/aboutus">About us</Nav.Link>

        {
          !isAuthenticated &&
          (
            <NavDropdown title="Rejoignez nous" id="basic-nav-dropdown">
              <NavDropdown.Item href="/register">Inscription</NavDropdown.Item>
              <NavDropdown.Item href="/login">Connexion</NavDropdown.Item>
            </NavDropdown>
          )
        }
        {
          isAuthenticated && 
          (
            <NavDropdown title="Mon Compte" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">Mon Profil</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Déconnexion</NavDropdown.Item>
            </NavDropdown>
          )
        }
      </Nav>
      <SearchBar />
    </Navbar.Collapse>
  </Navbar>
  )
}
      
export default NavBar;
