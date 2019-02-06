import React, { Component } from "react";
import SignupButton from "../signupbutton";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="content p-4">
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
          <div className="d-flex justify-content-center">
            <Link to="/login">
              <SignupButton />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
