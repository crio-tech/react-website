import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";

function navBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='nav-bar'>
        <Navbar.Brand>
          <Link to="/" className="navbar-logo">
            Gowtham
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/services">Services</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default navBar;
