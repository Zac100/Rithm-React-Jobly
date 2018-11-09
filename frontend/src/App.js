import React, { Component } from 'react';
import Routes from './Routes';
import NavBar from './NavBar';
import './App.css';
import { decode } from 'jsonwebtoken';
import JoblyApi from './JoblyApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null, isLoading: true };
    this.handleUser = this.handleUser.bind(this);
    this.handleApply = this.handleApply.bind(this);
  }

  // add user to current state
  async handleUser(token) {
    let user;
    // more logic to handle once successful signup/login
    if (token) {
      localStorage.setItem('_token', token);

      let tokenUser = decode(token);

      user = await JoblyApi.getUser(tokenUser.username);

      // this.props.history.push('/');
    } else {
      user = token;
    }
    this.setState({ currentUser: user, isLoading: false });
  }

  async handleApply(id) {
    await JoblyApi.applyForJob(
      { username: this.state.currentUser.user.username, state: 'applied' },
      id
    );

    let appliedJobs = this.state.currentUser.user.jobs;
    appliedJobs.push(id);

    let user = this.state.currentUser;
    // user.jobs = appliedJobs

    this.setState({
      currentUser: { ...user, jobs: appliedJobs },
      isLoading: false
    });
  }

  async componentDidMount() {
    let token = localStorage.getItem('_token');

    console.log('JERBS!');

    if (token) {
      let tokenUser = decode(token);

      let user = await JoblyApi.getUser(tokenUser.username);

      this.setState({ currentUser: user, isLoading: false });
    } else {
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading === true) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="App">
        <NavBar currentUser={this.state.currentUser} />
        <Routes
          handleUser={this.handleUser}
          handleApply={this.handleApply}
          currentUser={this.state.currentUser}
        />
      </div>
    );
  }
}

export default App;
