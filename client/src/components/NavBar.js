import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/">
          <NavItem eventKey={1}>techMap()</NavItem>
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/jobslist">
          <NavItem eventKey={2}>Saved Jobs</NavItem>
        </LinkContainer>
        <LinkContainer to="/about">
          <NavItem eventKey={2}>About</NavItem>
        </LinkContainer>
        <LinkContainer to="/contact">
          <NavItem eventKey={3}>Contact</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navbarInstance;
