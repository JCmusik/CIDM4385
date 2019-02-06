import React, { Component } from "react";
import Header from "./components/header";
import Buttons from "./components/buttons";
import Footer from "./components/footer";
import Participants from "./components/participants";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Welcome from "./components/welcome/welcome";
import Confirmation from "./components/confirmation/confirmation";
import Pay from "./components/pay/pay";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div class="container">
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Participants />
                  <Buttons />
                </React.Fragment>
              )}
            />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/pay" component={Pay} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
