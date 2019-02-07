import React, { Component } from "react";
import { Link } from "react-router-dom";

class PaySelectButton extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Link to="/confirmation">
          <div className="d-flex justify-content-center">
            <button id="select" className="btn btn-secondary m-2">
              Select
            </button>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

export default PaySelectButton;
