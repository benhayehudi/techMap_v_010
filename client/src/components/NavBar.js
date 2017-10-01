import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
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
                      <NavItem eventKey={1}> techMap()</NavItem>
                    </LinkContainer>
                  </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
              <Navbar.Collapse>
              <Nav>
                <NavDropdown eventKey={2} title="My Account" id ="basic-nav-dropdown">
                  <LinkContainer to="/user/acount">
                    <MenuItem eventKey={2.1}>Manage Account</MenuItem>
                  </LinkContainer>
                  <LinkContainer to="/user/listings">
                    <MenuItem eventKey={2.2}>Saved Listings</MenuItem>
                  </LinkContainer>
                  <LinkContainer to="/logout" onClick={this.logOut}>
                    <MenuItem eventKey={2.3}>Logout</MenuItem>
                  </LinkContainer>
                </NavDropdown>
                <LinkContainer to="/about">
                  <NavItem eventKey={3}>About</NavItem>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <NavItem eventKey={4}>Contact</NavItem>
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
                <Navbar.Toggle/>
                </Navbar.Header>
              <Navbar.Collapse>
              <Nav>
                <LinkContainer to="/login">
                  <NavItem eventKey={2}>Login</NavItem>
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
