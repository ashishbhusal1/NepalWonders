import React, { Component } from "react";
import Select from "react-select";

const options = [
  { value: "Chitwan", label: "Chitwan" },
  { value: "Kathmandu", label: "Kathmandu" },
];


class SearchBar extends Component {
  state = {
    selectedOption: null,
  };

  cityChangeHandler = (selectedOption) => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="search-bar">
        <div className="select-city-large">
          <div className="select-div">
            <Select
              placeholder="Select City"
              value={selectedOption}
              onChange={this.cityChangeHandler}
              options={options}
            />
          </div>
        </div>
        <div className="select-experience-large"/>
        <button id="go">Lets Go</button>
      </div>
    );
  }
}

export default SearchBar;
