import React, { Component } from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import Home from './Home'
import Companies from './Companies'
import Company from './Company'
import Jobs from './Jobs'
import Login from './Login'
import Profile from './Profile'
import './App.css';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

//   updateState(color) {
//     let addMe = { ...color };
//     this.setState(st => ({
//       colors: [...st.colors, addMe]
//     }));
//   }

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
            render={props => <Login />}
          />
           <Route
            exact
            path="/profile"
            render={props => <Profile />}
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
