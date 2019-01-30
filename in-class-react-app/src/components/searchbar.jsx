import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div className="SearchBar text-white p-3">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              GO!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
