import React, { Component } from "react";
import WelcomeForm from "./welcomeForm";

class Welcome extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="content p-4">
          <div className="d-flex-column bg-secondary text-white p-2">
            <div className="d-flex justify-content-center">
              <h4>Welcome [User Email]</h4>
            </div>
            <div className="d-flex justify-content-center">
              <h6>Choose your pizza</h6>
            </div>
            <WelcomeForm />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Welcome;
