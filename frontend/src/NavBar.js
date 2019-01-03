import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render() {
    const authedLinks = (
      <div>
        <NavLink className="navlink" exact to="/">
                Home
              </NavLink>
        <NavLink className="navlink" to="/companies"> Companies</NavLink>
        <NavLink className="navlink" to="/jobs">Jobs</NavLink>
        <NavLink className="navlink" to="/profile">Profile</NavLink>
        <NavLink className="navlink" to="/logout">Logout</NavLink>
      </div>
    );
    const links = (
      <div>
        <NavLink className="navlink" exact to="/">
                Home
              </NavLink>
        <NavLink className="navlink" to="/login">Login</NavLink>
      </div>
    );
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
          <h1>Jobly</h1>
            
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
              
              {this.props.currentUser ? authedLinks : links}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
