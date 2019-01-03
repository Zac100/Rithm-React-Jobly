import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import './LoginForm.css'


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', error: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //changes state whenever search value is changed.
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  //on login button click, request token from Api,
  // then decode token, call database to get user info
  // Set the state of the app with the user info
  // If error, set state to the error and displays in the render
  async handleSubmit(evt) {
    evt.preventDefault();
    let userData = {
      username: this.state.username,
      password: this.state.password
    };

    try {
      let token = await JoblyApi.login(userData);
      if (token) {
        this.props.handleUser(token);
        this.setState({ username: '', password: '' });
        this.props.history.push('/')
      }
    } catch (err) {
      this.setState({ error: err });
    }
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit} method="get">
        <div className="container">
        <div className="row">

          <label htmlFor="login">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          </div>
          <div className="row">

          <label htmlFor="login">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          </div>
          </div>
          <button>Login</button>
        </form>
        <div className="bg-danger">{this.state.error}</div>
      </div>
    );
  }
}

export default LoginForm;
