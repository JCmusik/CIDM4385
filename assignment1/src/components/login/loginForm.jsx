import React, { Component } from "react";

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="content p-4">
          <form
            action="/action_page.php"
            className="bg-secondary text-white p-2"
          >
            <div className="form-group">
              <label for="email">Email address:</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label for="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>
          </form>
        </div>
        <div className="d-flex-column">
          <div className="d-flex justify-content-center">
            <button id="login" className="btn btn-secondary m-2">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
