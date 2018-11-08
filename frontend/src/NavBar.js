import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/companies'>Companies</NavLink>
            <NavLink to='/jobs'>Jobs</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            {(this.props.currentUser) ? <NavLink to='/logout'>Logout</NavLink> :<NavLink to='/login'>Login</NavLink>}
        </nav>
    );
  }
}

export default NavBar;