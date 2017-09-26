import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import * as sessionActions from '../actions/SessionActions';

class navbarInstance extends React.Component {
  constructor(props) {
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }

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
            <LinkContainer to="/logout" onClick={this.logOut}>
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

navbarInstance.propTypes = {
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return ({
    logged_in: state.session
  })
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(navbarInstance);
