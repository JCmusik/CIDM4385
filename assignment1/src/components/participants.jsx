import React, { Component } from "react";
import Dominos from "../img/dominos-logo.png";
import PapaJohns from "../img/papajohns-logo.png";
import PizzaHut from "../img/pizzahut-logo.png";
import PizzaPlanet from "../img/pizzaplanet-logo.png";

class Participants extends Component {
  state = {};
  render() {
    return (
      <div class="d-flex-row">
      <div class="d-flex justify-content-center">
          <img src={Dominos} alt="dominos" className="rounded p-1" />
          <img src={PapaJohns} alt="papa johns" className="rounded p-1" />
      </div>
      <div class="d-flex justify-content-center">
          <img src={PizzaHut} alt="pizza hut" className="rounded p-1" />
          <img src={PizzaPlanet} alt="pizza hut" className="rounded p-1" />
      </div>
      </div>
    );
  }
}

export default Participants;
