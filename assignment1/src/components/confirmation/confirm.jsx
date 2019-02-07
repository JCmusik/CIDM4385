import React, { Component } from "react";

class Confirm extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center bg-secondary text-white">
          <h5>Delivery Cofirmation from</h5>
        </div>
        <div className="d-flex justify-content-center bg-secondary text-white">
          <h5>Domino's Pizza</h5>
        </div>
        <div className="d-flex-column bg-secondary text-white">
          <div className="d-flex justify-content-center bg-secondary text-white">
            <h5>Thank you [User Email]!</h5>
          </div>
          <div className="d-flex justify-content-center bg-secondary text-white">
            <h5>for your order</h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Confirm;
