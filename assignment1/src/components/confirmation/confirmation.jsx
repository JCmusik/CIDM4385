import React, { Component } from "react";
import Confirm from "./confirm";
import LogoutButton from "../logoutbutton";

class Confirmation extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="wrap">
          <Confirm />
          <LogoutButton />
        </div>
      </React.Fragment>
    );
  }
}

export default Confirmation;
