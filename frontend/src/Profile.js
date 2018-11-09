import React, { Component } from 'react';
import JoblyApi from './JoblyApi';

//under construction
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.user.username,
      password: '',
      first_name: this.props.currentUser.user.first_name,
      last_name: this.props.currentUser.user.last_name,
      email: this.props.currentUser.user.email,
      photo_url:
        this.props.currentUser.user.photo_url ||
        'http://www.quickmeme.com/img/80/80bf9735504ee10a045dbf04b098d6a66470f58e34a59885e79a8915679b5ab4.jpg',
      error: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //changes state whenever search value is changed.
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async handleSubmit(evt) {
    try {
      evt.preventDefault();

      let userData = {
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        photo_url: this.state.photo_url
      };

      let user = await JoblyApi.update(userData, this.state.username);
      if (user) {
        this.props.handleUser(localStorage.getItem('_token'));

        this.setState({
          username: user.username,
          password: '',
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          photo_url: user.photo_url,
          error: []
        });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  }

  render() {
    return (
      <div className="Profile">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="profile">Username:</label>
          <p>{this.state.username}</p>
          <label htmlFor="profile">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            onChange={this.handleChange}
            value={this.state.first_name}
          />
          <label htmlFor="profile">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            onChange={this.handleChange}
            value={this.state.last_name}
          />
          <label htmlFor="profile">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <label htmlFor="profile">Photo Url:</label>
          <input
            type="photo_url"
            id="photo_url"
            name="photo_url"
            onChange={this.handleChange}
            value={this.state.photo_url}
          />
          <label htmlFor="profile">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button>Save Changes</button>
        </form>
        <div className="bg-danger">{this.state.error}</div>
      </div>
    );
  }
}

export default Profile;
