import React from 'react'
import { useSelector } from 'react-redux';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import SearchBar from './SearchBar'
          
const NavBar = ()  => {
  const { isAuthenticated } = useSelector((state) => state);
  
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="/">The Mill</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/shopslist">Shops</Nav.Link>
          <Nav.Link href="/shop">Shop</Nav.Link>
          <NavDropdown title="User" id="basic-nav-dropdown">

          {
            !isAuthenticated &&
            (
              <>
              <NavDropdown.Item href="/register">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
              </>
              )
            }
            {
              isAuthenticated && 
              (
                <>
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>
                </>
                )
              }
          </NavDropdown>
        </Nav>
        <SearchBar />
      </Navbar.Collapse>
    </Navbar>
  )
}
      
export default NavBar;
