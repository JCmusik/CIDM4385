import React, { Component } from "react";
import Dominos from "../img/dominos-logo.png";
import PapaJohns from "../img/papajohns-logo.png";
import PizzaHut from "../img/pizzahut-logo.png";
import PizzaPlanet from "../img/pizzaplanet-logo.png";

class Participants extends Component {
  state = {};
  render() {
    return (
      <div class="content p-4 text-center">
        <img src={Dominos} alt="dominos" class="rounded p-1" />
        <img src={PapaJohns} alt="papa johns" class="rounded p-1" />
        <img src={PizzaHut} alt="pizza hut" class="rounded p-1" />
        <img src={PizzaPlanet} alt="pizza hut" class="rounded p-1" />
      </div>
    );
  }
}

export default Participants;
