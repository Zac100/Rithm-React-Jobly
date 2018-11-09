import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import jerbs from './jerbs.jpg';
import './NavBar.css';

class NavBar extends Component {
  render() {
    const authedLinks = (
      <div>
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/logout">Logout</NavLink>
      </div>
    );
    const links = (
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
    );
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img
              src={jerbs}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink exact to="/">
                Home
              </NavLink>
              {this.props.currentUser ? authedLinks : links}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
