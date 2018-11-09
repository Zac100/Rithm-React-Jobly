import React, { Component } from 'react';
import Routes from './Routes';
import NavBar from './NavBar';
import './App.css';
import { decode } from 'jsonwebtoken';
import JoblyApi from './JoblyApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null, isLoading:true};
    this.handleUser = this.handleUser.bind(this);
  }

  // add user to current state
  handleUser(user) {
    // more logic to handle once successful signup/login
    this.setState({ currentUser: user, isLoading: false });
  }

  async componentDidMount() {
    let token = localStorage.getItem('_token');

    if (token) {
      let tokenUser = decode(token);

      let user = await JoblyApi.getUser(tokenUser.username);

      this.setState({ currentUser: user, isLoading: false });
    } else {
      this.setState({ isLoading: false });
    }
  }

  render() {
    if(this.state.isLoading === true){
      return <h1>Loading...</h1>
    }
    return (
      <div className="App">
        <NavBar currentUser={this.state.currentUser} />
        <Routes
          handleUser={this.handleUser}
          currentUser={this.state.currentUser}
        />
      </div>
    );
  }
}

export default App;
