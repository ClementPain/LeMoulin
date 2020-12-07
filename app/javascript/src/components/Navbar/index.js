import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Navbar = ()  => {
  const { isAuthenticated } = useSelector((state) => state);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">The Mill</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home
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
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
