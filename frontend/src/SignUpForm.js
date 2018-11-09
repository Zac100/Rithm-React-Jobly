import React, { Component } from 'react';
import JoblyApi from './JoblyApi';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: '',
      error: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //changes state whenever search value is changed.
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  //on signup button click, request token from Api,
  // then decode token, call database to get user info
  // Set the state of the app with the user info
  // If error, set state to the error and displays in the render
  async handleSubmit(evt) {
    try {
      evt.preventDefault();
      let userData = {
        username: this.state.username,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email
      };

      let token = await JoblyApi.signUp(userData);
      if (token) {
        this.props.handleUser(token);

        this.setState({
          username: '',
          password: '',
          first_name: '',
          last_name: '',
          email: ''
        });

        this.props.history.push('/');
      }
    } catch (err) {
      this.setState({ error: err });
    }
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
            type="password"
            id="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <label htmlFor="login">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            onChange={this.handleChange}
            value={this.state.first_name}
          />
          <label htmlFor="login">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            onChange={this.handleChange}
            value={this.state.last_name}
          />
          <label htmlFor="login">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <button>Login</button>
        </form>
        <div className="bg-danger">{this.state.error}</div>
      </div>
    );
  }
}

export default SignUpForm;
