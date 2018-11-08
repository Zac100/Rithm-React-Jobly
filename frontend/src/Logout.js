import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout(){
    localStorage.setItem('_token',null)
    this.props.handleUser(null)
  }

  render() {
    this.logout()
    return <Redirect to='/'/>;
  }
}

export default Logout;