import React from "react";
import Header from "./functionalComponents/Header";
import StartGame from "./functionalComponents/StartGame";
import GuessInput from "./functionalComponents/GuessInput";
import GuessesTable from "./functionalComponents/GuessesTable";
import players from "./players-current.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";

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
      success: false,
      fail: false,
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
    if (this.state.guesses.length < 8) {
      this.setState((prevState) => ({
        guesses: prevState.guesses.concat(guess),
      }));
      if (guess.name === this.state.player.name) {
        this.setState(() => ({
          success: true
        }))
      } 
    } else {
      if (guess.name === this.state.player.name) {
        this.setState(() => ({
          success: true
        }))
      }
      if (guess.name !== this.state.player.name){
        this.setState(() => ({
          fail: true
        }))
      }
    }
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
      success: false,
      fail: false,
    }));
  };
  render() {
    return (
      <Provider store={store}>
        <Header />
        <StartGame />
        <GuessInput />
        {/* <GuessesTable /> */}
      </Provider>
    );
  }
}

export default App;
