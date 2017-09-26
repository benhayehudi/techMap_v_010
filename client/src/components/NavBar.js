import React from 'react';
import {connect} from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class navbarInstance extends React.Component {
  render() {
    if (this.props.logged_in) {
      return (
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
            <LinkContainer to="/logout">
              <NavItem eventKey={2}>Logout</NavItem>
            </LinkContainer>
            <LinkContainer to="/jobslist">
              <NavItem eventKey={3}>Saved Jobs</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={4}>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem eventKey={5}>Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  } else {
    return (
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
            <LinkContainer to="/login">
              <NavItem eventKey={2}>Login</NavItem>
            </LinkContainer>
            <LinkContainer to="/jobslist">
              <NavItem eventKey={3}>Saved Jobs</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={4}>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem eventKey={5}>Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      );
    }
  }
}


const mapStateToProps = (state) => {
  return ({
    logged_in: state.session
  })
}

export default connect(mapStateToProps)(navbarInstance);
