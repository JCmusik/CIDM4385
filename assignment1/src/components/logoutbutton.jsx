import React, { Component } from "react";
import { Link } from "react-router-dom";

class LogoutButton extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center">
          <div className="d-flex justify-content-center">
            <Link to="/">
              <button id="logout" className="btn btn-secondary m-2">
                Logout
              </button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LogoutButton;
