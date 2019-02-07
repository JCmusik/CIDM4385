import React, { Component } from "react";
import SignupForm from "./signupform";

class Signup extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex-row">
        <SignupForm />
      </div>
    );
  }
}

export default Signup;
