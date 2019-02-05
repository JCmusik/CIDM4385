import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignupButton extends Component {
  state = {};
  render() {
    return (
      <Link to="/signup">
        <button id="signup" className="btn btn-secondary m-2">
          Signup
        </button>
      </Link>
    );
  }
}

export default SignupButton;
