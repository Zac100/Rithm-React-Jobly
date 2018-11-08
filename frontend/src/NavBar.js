import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let navRender;
    if (this.props.currentUser) {
      navRender = [
        <NavLink exact to="/">
          Home
        </NavLink>,
        <NavLink to="/companies">Companies</NavLink>,
        <NavLink to="/jobs">Jobs</NavLink>,
        <NavLink to="/profile">Profile</NavLink>,
        <NavLink to="/logout">Logout</NavLink>
      ];
    } else {
      navRender = [
        <NavLink exact to="/">
          Home
        </NavLink>,
        <NavLink to="/login">Login</NavLink>
      ];
    }
    return <nav>{navRender}</nav>;
  }
}

export default NavBar;
