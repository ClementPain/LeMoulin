import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap'

import SearchBar from './SearchBar'

const NavbarLeMoulin = ()  => {
  const { isAuthenticated } = useSelector((state) => state);
  
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Link className="navbar-brand" to="/">Le Moulin</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home
              <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" to="/shopslist">Boutiques
              <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" to="/itemslist">Produits
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          {
            !isAuthenticated &&
            (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Log In</Link>
                </li>
              </>
            )
          }
          {
            isAuthenticated && 
            (
              <li className="nav-item">
                <Link className="nav-link" to="/logout">Log Out</Link>
              </li>
            )
          }
        </Nav>
        <SearchBar />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarLeMoulin;
