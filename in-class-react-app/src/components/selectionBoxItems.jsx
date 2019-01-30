import React, { Component } from "react";

class SelectionItems extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul class="list-inline m-3 text-center">
          <li class="list-inline-item">
            <img alt="Item1" />
            <div>
              <input type="checkbox" />
            </div>
          </li>
          <li class="list-inline-item">
            <img alt="Item2" />
            <div>
              <input type="checkbox" />
            </div>
          </li>
          <li class="list-inline-item">
            <img alt="Item3" />
            <div>
              <input type="checkbox" />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default SelectionItems;
