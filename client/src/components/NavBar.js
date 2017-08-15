import React from 'react';
import ReactDOM from 'react-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'react-bootstrap';


const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">techMap()</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/about">About</NavItem>
        <NavItem eventKey={2} href="/contact">Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default navbarInstance;
