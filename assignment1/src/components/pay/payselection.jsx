import React, { Component } from "react";

class PaySelection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <table className="table bg-secondary text-white">
          <tr>
            <td>
              <h4>Topping:</h4>
            </td>
            <td>
              <h4>Pepperoni</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Size:</h4>
            </td>
            <td>
              <h4>Medium</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Lowest Bidder:</h4>
            </td>
            <td>
              <h4>Domino's Pizza</h4>
            </td>
          </tr>
        </table>
      </React.Fragment>
    );
  }
}

export default PaySelection;
