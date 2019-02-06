import React, { Component } from "react";
import { Link } from "react-router-dom";

class PaySelectButton extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Link to="/confirmation">
          <button id="select" className="btn btn-secondary m-2">
            Select
          </button>
        </Link>
      </React.Fragment>
    );
  }
}

export default PaySelectButton;
