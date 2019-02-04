import React, { Component } from "react";
import LoginButton from "./loginbutton";
import SignupButton from "./signupbutton";

class Buttons extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex-column">
        <div className="d-flex justify-content-center">
          <LoginButton />
        </div>
        <div className="d-flex justify-content-center">
          <SignupButton />
        </div>
      </div>
    );
  }
}

export default Buttons;
