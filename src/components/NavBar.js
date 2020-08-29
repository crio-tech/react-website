import React from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import './NavBar.css';

function NavBar() {
  return (
    <>
      <nav className="navbar">
          <Link to="/" className="navbar-logo">
            <MdFingerprint className="navbar-icon" />
            Gowtham
          </Link>

          <ul className="navbar-links">
            <li>
              <Link to="/about" >
                About
              </Link>
            </li>
            <li>
              <Link to="/services" >
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" >
                Contact
              </Link>
            </li>
          </ul>
      </nav>
    </>
  );
}

export default NavBar;
