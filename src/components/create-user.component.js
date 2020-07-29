import React, { Component } from "react";
//Use axios for POST requests to database
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    //Bind methods to constructor
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //Object initial state
    this.state = {
      username: "",
    };
  }

  //Methods to update properties
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  //Method to handle submit events
  onSubmit(e) {
    //Prevent default HTML form submit behaviour
    e.preventDefault();

    const newUser = {
      username: this.state.username,
    };

    //Log object to console
    console.log(newUser);
    //POST object to database
    axios
      .post("http://localhost:5000/users/add", newUser)
      .then((res) => console.log(res.data));

    //Object initial state
    this.setState({
      username: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
