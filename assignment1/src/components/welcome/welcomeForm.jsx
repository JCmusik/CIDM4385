import React, { Component } from "react";

class WelcomeForm extends Component {
  state = {};
  render() {
    return (
      <div className="d-flexjustify-content-center">
        <form>
          <div className="form-group">
            <label for="payment">Topping:</label>
            <select className="form-control" id="payment">
              <option>Pepperoni</option>
              <option>Canadian Bacon</option>
              <option>Hamburger</option>
              <option>Cheese</option>
            </select>
          </div>
          <div className="form-group">
            <label for="payment">Size:</label>
            <select className="form-control" id="payment">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default WelcomeForm;
