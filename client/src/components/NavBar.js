import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className="Home">
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/login" activeClassName="active">Login</NavLink>
      <NavLink to="/about" activeClassName="active">About</NavLink>
    </div>
  );
}

export default NavBar;
