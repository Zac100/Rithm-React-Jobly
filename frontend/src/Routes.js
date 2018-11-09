import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import PrivateRoute from './PrivateRoute';
import './App.css';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // If the below value exists, opens up all routes, otherwise routes redirects to home
    return (
      <div className="Routes">
        <Switch>
          <Route exact path="/" render={props => <Home
                currentUser={this.props.currentUser}/>} />

          <PrivateRoute currentUser={this.props.currentUser} exact path="/companies" render={props => <Companies />} />

          <PrivateRoute currentUser={this.props.currentUser}
            exact
            path="/companies/:handle"
            render={props => <Company {...props} />}
          />

          <PrivateRoute currentUser={this.props.currentUser} exact path="/jobs" render={props => <Jobs currentUser={this.props.currentUser} handleApply={this.props.handleApply}/>} />

          <Route
            exact
            path="/login"
            render={props => (
              <Login
                {...props}
                currentUser={this.props.currentUser}
                handleUser={this.props.handleUser}
              />
            )}
          />

          <PrivateRoute currentUser={this.props.currentUser} exact path="/profile" render={props => <Profile currentUser={this.props.currentUser} handleUser={this.props.handleUser}/>} />

          <PrivateRoute currentUser={this.props.currentUser}
            exact
            path="/logout"
            render={props => <Logout handleUser={this.props.handleUser} />}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Routes;
