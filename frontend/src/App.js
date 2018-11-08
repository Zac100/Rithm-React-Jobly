import React, { Component } from 'react';
import Routes from './Routes';
import NavBar from './NavBar';
import './App.css';
import { decode } from 'jsonwebtoken';
import JoblyApi from './JoblyApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currUser: null };
    this.handleUser = this.handleUser.bind(this);
  }

  // add user to current state
  async handleUser(user) {
    await this.setState({ currUser: user });
  }

  async componentDidMount() {
    let token = localStorage.getItem('_token');

    if (token) {
      let tokenUser = decode(token);

      let user = await JoblyApi.getUser(tokenUser.username);

      this.handleUser(user);
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar currentUser={this.state.currUser} />
        <Routes
          handleUser={this.handleUser}
          currentUser={this.state.currUser}
        />
      </div>
    );
  }
}

export default App;
