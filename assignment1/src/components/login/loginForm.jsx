import React, { Component } from "react";
import SignupButton from "../signupbutton";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <div class="d-flex-row">
        <div class="d-flex justify-content-center">
          <form action="" className="bg-secondary text-white p-2">
            <div className="form-group">
              <label for="email">Email address:</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label for="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>
            <div className="form-group">
              <Link to="/welcome">
                <input
                  type="submit"
                  className="form-control"
                  id="login"
                  value="Login"
                />
              </Link>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/login">
            <SignupButton />
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginForm;
