import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import {decode} from 'jsonwebtoken';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '',password:'' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //changes state whenever search value is changed.
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  //sets final state to either search company or search job 
  //depending on if companySearch is t/f
  //
  async handleSubmit(evt) {
    evt.preventDefault();
    let userData={
        username:this.state.username,
        password:this.state.password
    }

    let token = await JoblyApi.login(userData)

    localStorage.setItem('_token',token)

    let tokenUser = decode(token)

    let user = await JoblyApi.getUser(tokenUser.username)

    this.props.handleUser(user)

    this.setState({ username: '',password:'' });

    this.props.history.push('/')
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit} method="get">
            <label htmlFor="login">Username:</label>
            <input
            type="text"
            id="username"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
            />
            <label htmlFor="login">Password:</label>
            <input
            type="text"
            id="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
