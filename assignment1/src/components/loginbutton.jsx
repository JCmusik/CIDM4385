import React, { Component } from "react";

class LoginButton extends Component {
  state = {};
  render() {
    return (
      <a href="#">
        <button id="login" class="btn btn-secondary m-2">
          Login
        </button>
      </a>
    );
  }
}

export default LoginButton;
