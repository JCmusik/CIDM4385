import React, { Component } from "react";

class SignupButton extends Component {
  state = {};
  render() {
    return (
      <a href="#">
        <button id="signup" class="btn btn-secondary m-2">
          Signup
        </button>
      </a>
    );
  }
}

export default SignupButton;
