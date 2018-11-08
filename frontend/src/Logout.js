import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout(){
    localStorage.removeItem('_token')
    this.props.handleUser(null)
  }

  render() {
    this.logout()
    return <Redirect to='/'/>;
  }
}

export default Logout;