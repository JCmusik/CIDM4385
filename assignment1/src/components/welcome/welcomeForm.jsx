import React, { Component } from "react";
import { Link } from "react-router-dom";
import SelectButton from "../selectbutton";

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
          <div className="d-flex-column">
            <Link to="/pay">
              <SelectButton />
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default WelcomeForm;
