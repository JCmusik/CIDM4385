import React, { Component } from "react";

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
              <input
                type="submit"
                className="form-control"
                id="login"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
