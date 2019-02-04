import React, { Component } from "react";
import Header from "./components/header";
import Buttons from "./components/buttons";
import Footer from "./components/footer";
import Participants from "./components/participants";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div class="container">
          <Participants />
          <Buttons />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
