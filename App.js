import React, { Component } from "react";

class User extends Component {
  state = {
    newUser: { firstName: "", lastName: "" }
  };
  handleFirstName(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        firstName: value
      }
    }));
  }
  handleLastName(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        lastName: value
      }
    }));
  }

  getFullName() {
    return this.state.newUser.firstName + " " + this.state.newUser.lastName;
  }

  render() {
    return (
      <div>
        Enter your Full Name: {this.getFullName()} 
        <br></br>
        <input
          type="text"
          onChange={this.handleFirstName.bind(this)}
          placeholder="Enter first Name"
        />
        <input
          type="text"
          onChange={this.handleLastName.bind(this)}
          placeholder="Enter last Name"
        />
         
      </div>
    );
  }
}
export default User;
