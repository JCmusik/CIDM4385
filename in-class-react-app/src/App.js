import React, { Component } from "react";
import SearchBar from "./components/searchbar";
import SelectionBox from "./components/selectionBox";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="SearchBar">
          <SelectionBox />
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
