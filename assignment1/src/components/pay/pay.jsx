import React, { Component } from "react";
import PaySelection from "./payselection";
import PayForm from "./payform";

class Pay extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <PaySelection />
        <PayForm />
      </React.Fragment>
    );
  }
}

export default Pay;
