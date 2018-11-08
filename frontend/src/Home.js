import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let welcomeMsg;

    console.log(this.props.currentUser)

    if(this.props.currentUser){
      welcomeMsg = `Hello ${this.props.currentUser.user.first_name}, welcome back!`
    } else{
      welcomeMsg = 'Hello, please login'
    }
    return (
      <div className="Home">
        <h1>{welcomeMsg}</h1>
      </div>
    );
  }
}

export default Home;
