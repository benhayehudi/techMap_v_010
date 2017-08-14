import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar color="blue">

          <NavbarBrand href="/">techMap()</NavbarBrand>

            <Nav navbar>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavbarContainer;
