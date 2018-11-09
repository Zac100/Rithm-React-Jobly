import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import jerbs from "./jerbs.jpg";
import "./NavBar.css";
import { timingSafeEqual } from "crypto";

class NavBar extends Component {
  render() {
    const authedLinks = (
      <div>
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/logout">Logout</NavLink>
      </div>
    )
    const links = (
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
    )
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            <img
              src={jerbs}
              width="80"
              height="80"
              class="d-inline-block align-top"
              alt=""
            />
          </a>
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
              {this.props.currentUser ? authedLinks : links}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
