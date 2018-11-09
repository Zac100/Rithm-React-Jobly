import React, { Component } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { login: true };
    this.setLogin = this.setLogin.bind(this);
    this.setSignUp = this.setSignUp.bind(this);
  }

  setLogin() {
    this.setState({ login: true });
  }

  setSignUp() {
    this.setState({ login: false });
  }

  render() {
    return (
      <div className="Login">
        <button onClick={this.setLogin} className="btn btn-primary">
          Login
        </button>
        <button onClick={this.setSignUp} className="btn btn-primary">
          Signup
        </button>
        {this.state.login ? (
          <LoginForm {...this.props} handleUser={this.props.handleUser} />
        ) : (
          <SignUpForm {...this.props} handleUser={this.props.handleUser} />
        )}
      </div>
    );
  }
}

export default Login;
