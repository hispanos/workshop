import React from "react";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Inicio</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/new" style={{ textDecoration: 'none' }}>Nuevo</Link>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
