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
        email: this.state.email,
        photo_url:
          'http://www.quickmeme.com/img/80/80bf9735504ee10a045dbf04b098d6a66470f58e34a59885e79a8915679b5ab4.jpg'
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
      <div className="Profile container">
        <form onSubmit={this.handleSubmit} method="get">
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
          <div className="row">

          <label htmlFor="login">First Name:</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              onChange={this.handleChange}
              value={this.state.first_name}
            />  
          </div>
          <div className="row">

          <label htmlFor="login">Last Name:</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              onChange={this.handleChange}
              value={this.state.last_name}
            />  
          </div>
          <div className="row">

          <label htmlFor="login">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />  
          </div>
          <button>Sign Up</button>
        </form>
        <div className="bg-danger">{this.state.error}</div>
      </div>
    );
  }
}

export default SignUpForm;
