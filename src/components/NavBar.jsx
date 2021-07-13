import React from "react";
import { Nav, NavItem, NavLink } from "react-bootstrap";


const NavBar = () => {
  return (
    <div>
      <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavItem>
          <NavLink href="#">Inicio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Nuevo</NavLink>
        </NavItem>
      </Nav>
      
    </div>
  );
};

export default NavBar;
