import React, { Component } from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import Home from './Home'
import Companies from './Companies'
import Company from './Company'
import Jobs from './Jobs'
import Login from './Login'
import Logout from './Logout'
import Profile from './Profile'
import './App.css';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Routes">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home />}
          />
          <Route
            exact
            path="/companies"
            render={props => <Companies />}
          />
          <Route
            exact
            path="/companies/:handle"
            render={props => <Company {...props} />}
          />
          <Route
            exact
            path="/jobs"
            render={props => <Jobs />}
          />
          <Route
            exact
            path="/login"
            render={props => <Login {...props} currentUser={this.props.currentUser} handleUser={this.props.handleUser} />}
          />
           <Route
            exact
            path="/profile"
            render={props => <Profile />}
          />
           <Route
            exact
            path="/logout"
            render={props => <Logout handleUser={this.props.handleUser}/>}
          />
           <Redirect
            to="/"
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;
