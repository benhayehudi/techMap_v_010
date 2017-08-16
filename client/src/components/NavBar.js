import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter} from 'react-router-dom';

const navbarInstance = (
  <BrowserRouter>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <LinkContainer to="/" onClick={ e => this.props.history.push("/") }>
            <NavItem eventKey={1}>techMap()</NavItem>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
        <LinkContainer to="/about" onClick={ e => this.props.history.push("/about") }>
          <NavItem eventKey={2}>About</NavItem>
        </LinkContainer>
        <LinkContainer to="/contact" onClick={ e => this.props.history.push("/contact") }>
          <NavItem eventKey={3}>Contact</NavItem>
        </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </BrowserRouter>
);
export default navbarInstance;
