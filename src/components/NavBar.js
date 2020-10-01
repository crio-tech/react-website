import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <NavLink className="navbar-brand" to="/">
              Gowtham
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/about"
                  >
                    Meet Gowtham
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/home"
                  >
                    Sessions
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/contact"
                  >
                    Contact Me
                  </NavLink>
                </li>
                {/* ToDo: Add booking button here */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
