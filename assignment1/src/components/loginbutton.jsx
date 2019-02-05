import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginButton extends Component {
  state = {};
  render() {
    return (
      <Link to="/login">
        <button id="login" className="btn btn-secondary m-2">
          Login
        </button>
      </Link>
    );
  }
}

export default LoginButton;
