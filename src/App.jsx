import React, { Component } from 'react';
import rock from './data/images/rock.png'
import paper from './data/images/paper.png'
import scissors from './data/images/scissors.png'
import {computerSelection, game, } from './modules/gameLogic'


class App extends Component {
	state = {
		player: '',
		computer: '',
    results: '',
    showMessage: false
  }
  
 handleButtonClick(event) {
		let player = event.target.name
    let computer = computerSelection()
		this.setState({ player: player, computer: computer, results: game(player, computer), showMessage: true})
	}

  render() {
    return (
      <div className="App" id="app">
        <h2>Play Rock Paper Scissors</h2>
        <h3>Select your weapons of choice from below:</h3>
        <div id="playoptions">
          <div id="rockcontainer">
            <h3 id="rock">Rock</h3>
            <img src={rock} id="rockimg"/>
            <button id="rockbutton" onClick={event => this.handleButtonClick(event)} name="rock">Pick Rock</button>
          </div>
          <div id="papercontainer">
            <h3 id="paper">Paper</h3>
            <img src={paper} id="paperimg"/>
            <button id="paperbutton" onClick={event => this.handleButtonClick(event)} name="paper">Pick Paper</button>
          </div>
          <div id="scissorscontainer">
            <h3 id="scissors">Scissors</h3>
            <img src={scissors} id="scissorsimg"/>
            <button id="scissorbutton" onClick={event => this.handleButtonClick(event)} name="scissors">Pick Scissors</button>
          </div>
        </div>
        {this.state.showMessage &&
        <>
        <div id="results">
        <h3>{`Your choice: ${this.state.player}`}<br/>{`Computer Choice: ${ this.state.computer}`}</h3><br/>
          <h2>Result:</h2>
          <h3>{this.state.results}</h3>
          </div>
        </>
        }
      </div>
      
    );
  }
}

export default App;