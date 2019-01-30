import React, { Component } from "react";
import SelectionItems from "./selectionBoxItems";

class SelectionBox extends Component {
  state = {};
  render() {
    return (
      <div className="SelectionBox card">
        <SelectionItems />
      </div>
    );
  }
}

export default SelectionBox;
