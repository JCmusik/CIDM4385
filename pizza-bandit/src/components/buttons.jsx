import React, { Component } from "react";
import LoginButton from "./loginbutton";
import SignupButton from "./signupbutton";

class Buttons extends Component {
  state = {};
  render() {
    return (
      <div class="d-flex-column">
        <div class="d-flex justify-content-center">
          <LoginButton />
        </div>
        <div class="d-flex justify-content-center">
          <SignupButton />
        </div>
      </div>
    );
  }
}

export default Buttons;
