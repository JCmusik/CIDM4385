import React, { Component } from "react";
import Confirm from "./confirm";
import LogoutButton from "../logoutbutton";

class Confirmation extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="content p-4">
          <div className="d-flex-column bg-secondary text-white">
            <Confirm />
          </div>
          <LogoutButton />
        </div>
      </React.Fragment>
    );
  }
}

export default Confirmation;
