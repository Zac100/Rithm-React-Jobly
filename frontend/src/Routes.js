import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import './App.css';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // If the below value exists, opens up all routes, otherwise routes redirects to home
    let userExists = this.props.currentUser;
    return (
      <div className="Routes">
        <Switch>
          <Route exact path="/" render={() => <Home />} />

          {userExists ? (
            <Route exact path="/companies" render={props => <Companies />} />
          ) : null}

          {userExists ? (
            <Route
              exact
              path="/companies/:handle"
              render={props => <Company {...props} />}
            />
          ) : null}

          {userExists ? (
            <Route exact path="/jobs" render={props => <Jobs />} />
          ) : null}

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

          {userExists ? (
            <Route exact path="/profile" render={props => <Profile />} />
          ) : null}

          <Route
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
