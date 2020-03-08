import React, { Component } from "react";
import axios from "axios";
import OptionCard from "./components/OptionCard";

class Option extends Component {
  state = {
    option: []
  };

  componentDidMount() {
    axios.get('./src/data/options.json')
      .then(response => {
        this.setState({
          option: response.data
        });
      });
  }

  render() {
    const option = this.state.option;
    let gameList;

    if (option.length > 0) {
      gameList = option.map(options => {
        return (
          <div id={'option-' + options.name} key={options.id}>
            <OptionCard options={options} />
          </div>
        );
      });
    }

    return (
      <div > 
        <h1>Testing</h1>    
        <div>{gameList}</div>
      </div>
    );
  }
}

export default Option;