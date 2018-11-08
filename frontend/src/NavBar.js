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
      navRender = (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/companies">Companies</NavLink>
              <NavLink to="/jobs">Jobs</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/logout">Logout</NavLink>
            </div>
          </div>
        </nav>
      );
    } else {
      navRender = (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/login">Login</NavLink>
            </div>
          </div>
        </nav>
      );
    }
    return <nav>{navRender}</nav>;
  }
}

export default NavBar;
