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
      <div>
        <div>
          <div>
            <Select
              placeholder="Select City"
              value={selectedOption}
              onChange={this.cityChangeHandler}
              options={options}
            />
          </div>
        </div>
        <button>Lets Go</button>
      </div>
    );
  }
}

export default SearchBar;
