import React from "react";
import Header from "./components/Header";
import StartGame from "./components/StartGame";
import GuessInput from "./components/GuessInput";
import GuessesTable from "./components/GuessesTable";
import players from "./players-current.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getPlayer = this.getPlayer.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleGuesses = this.handleGuesses.bind(this);
    this.state = {
      player: {
        name: "",
        position: "",
        height: "",
        team: "",
        conference: "",
        division: "",
        inches: 0,
      },
      guesses: [],
    };
  }
  getPlayer = async () => {
    let id = Math.floor(Math.random() * 499);
    const response = await fetch(`http://localhost:3004/players?id=${id}`);

    const data = await response.json();

    await this.handleState(data[0]);

    console.log(data[0]);
  };

  handleGuesses = (guess) => {
    this.setState((prevState) => ({
      guesses: prevState.guesses.concat(guess),
    }));
  };

  handleState = (player) => {
    this.setState(() => ({
      player: {
        name: `${player.first_name} ${player.last_name}`,
        position: player.position,
        height: `${player.height_feet}'${player.height_inches}`,
        team: player.team.full_name,
        conference: player.team.conference,
        division: player.team.division,
        abbreviation: player.team.abbreviation,
        number: player.number,
        inches: player.height_only_inches,
      },
      guesses: [],
    }));
  };
  render() {
    return (
      <div>
        <Header />
        <StartGame player={this.state.player} newGame={this.getPlayer} />
        <GuessInput
          player={this.state.player}
          players={players}
          guesses={this.state.guesses}
          handleGuesses={this.handleGuesses}
        />
        <GuessesTable
          guesses={this.state.guesses}
          playerToGuess={this.state.player}
        />
      </div>
    );
  }
}

export default App;
