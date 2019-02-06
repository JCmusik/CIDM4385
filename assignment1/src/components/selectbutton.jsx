import React, { Component } from "react";
import { Link } from "react-router-dom";

class SelectButton extends Component {
  state = {};
  render() {
    return (
      <Link to="/pay">
        <button id="select" className="btn btn-secondary m-2">
          Select
        </button>
      </Link>
    );
  }
}

export default SelectButton;
