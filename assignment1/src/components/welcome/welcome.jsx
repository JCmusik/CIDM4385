import React, { Component } from "react";
import WelcomeForm from "./welcomeForm";

class Welcome extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <WelcomeForm />
      </React.Fragment>
    );
  }
}

export default Welcome;
