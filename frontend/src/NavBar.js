import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/companies'>Companies</NavLink>
            <NavLink to='/jobs'>Jobs</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/login'>Log out</NavLink>
        </nav>
    );
  }
}

export default NavBar;