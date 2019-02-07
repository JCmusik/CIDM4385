import React, { Component } from "react";
import { Link } from "react-router-dom";

class WelcomeForm extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex-row">
        <div className="d-flex justify-content-center">
        <form action="" className="bg-secondary text-white p-2">
        <div className="d-flex justify-content-center">
          <h4>Welcome [User Email]</h4>
        </div>
        <div className="d-flex justify-content-center">
          <h6>Choose your pizza</h6>
        </div>
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
        <div className="form-group">
          <Link to="/pay">
            <input
              type="submit"
              className="form-control"
              id="select"
              value="select"
            />
          </Link>
        </div>
        </form>
      </div>
      </div>
    );
  }
}

export default WelcomeForm;
