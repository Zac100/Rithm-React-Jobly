import React, { Component } from 'react';
import Routes from './Routes'
import NavBar from './NavBar'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currUser:{}};
    this.handleUser = this.handleUser.bind(this);
  }

  // add user to current state
  async handleUser(user) {
    await this.setState({currUser:user});
    console.log(this.state)
  }


  render() {
    return (
      <div className="App">
        <NavBar currentUser={this.state.currUser}/>
        <Routes handleUser={this.handleUser} currentUser={this.state.currUser}/>
      </div>
    );
  }
}

export default App;
