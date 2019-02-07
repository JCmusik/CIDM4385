import React, { Component } from "react";

class PaySelection extends Component {
  state = {};
  render() {
    return (
      <div className="wrap bg-secondary text-white p-2">
        <div className="d-flex flex-row">
          <h4>Topping: </h4> <h4> Pepperoni</h4>
        </div>
        <div className="d-flex flex-row">
          <h4>Size: </h4> <h4> Medium</h4>
        </div>
        <div className="d-flex flex-row">
          <h4>Lowest Bidder: </h4> <h4> Dominos</h4>
        </div>
      </div>
    );
  }
}

export default PaySelection;
