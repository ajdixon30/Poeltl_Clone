import React from "react";
import "../styles/GuessInput.css";
import players from "../players-current.json";
import { Button, Modal } from "react-bootstrap";

const items = players.players.map((player) => {
  return {
    id: player.id,
    name: player.full_name,
    height: `${player.height_feet}'${player.height_inches}`,
    position: player.position,
    conference: player.team.conference,
    division: player.team.division,
    team: player.team.full_name,
    abbreviation: player.team.abbreviation,
    number: player.number,
    image: player.team.image,
    inches: player.height_only_inches,
  };
});

class Guess extends React.Component {
  constructor(props) {
    super(props);
    this.sendGuess = this.sendGuess.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.showCell = this.showCell.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.state = {
      id: 1,
      input: "",
      show: false,
      modalMessage: ''
    };
  }
  handleClose = () => this.setState(() => ({
    show: false
  }))
  handleShow = () => this.setState(() => ({
    show: true
  }))
  handleSearch = (e) => {
    this.setState(() => ({
      input: e.target.value.toLowerCase(),
    }));
  };
  showCell = (e) => {
    let guessName = e.target.textContent;
    let guess = items.filter((item) => {
      return item.name.toLowerCase().includes(guessName.toLowerCase());
    });
    this.setState(() => ({
      input: "",
    }));
    document.querySelector("#guess-input").value = "";
    this.sendGuess(guess[0]);
  };
  sendGuess = (playerGuess) => {
    const guess = {
      id: this.state.id,
      name: playerGuess.name,
      height: playerGuess.height,
      position: playerGuess.position,
      conference: playerGuess.conference,
      division: playerGuess.division,
      team: playerGuess.team,
      abbreviation: playerGuess.abbreviation,
      number: playerGuess.number,
      image: playerGuess.image,
      inches: playerGuess.inches,
    };
    this.props.handleGuesses(guess);
    if (this.props.player.name.toLowerCase() !== playerGuess.name.toLowerCase()) {
      this.setState((prevState) => ({
        id: prevState.id + 1,
      }));
    } 
    if (this.props.player.name.toLowerCase() === playerGuess.name.toLowerCase()) {
      this.handleShow();
      this.setState(() => ({
        modalMessage: 'CONGRATULATIONS!',
        id: 1
      }))
    }
    if (this.props.guesses.length === 8 && !this.props.success) {
      this.handleShow();
      this.setState(() => ({
        modalMessage: 'GAME OVER!',
        id: 1
      }))
    }
  };
  render() {
    let resultsFiltered = items.filter((item) => {
      return item.name.toLowerCase().includes(this.state.input);
    });
    let results = [];
    if (resultsFiltered.length < 5) {
      results = [];
      for (let i = 0; i < resultsFiltered.length; i++) {
        results.push(resultsFiltered[i]);
      }
    } else {
      results = [];
      for (let i = 0; i < 5; i++) {
        results.push(resultsFiltered[i]);
      }
    }
    let resultsListing = results.map((result, index) => {
      return (
        <li className="results-listing" key={index}>
          {result.name}
        </li>
      );
    });
    return (
      <div className="guess-container">
        <Modal animation={true} centered={true} show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
            <Modal.Title>{ this.state.modalMessage }</Modal.Title>
      </Modal.Header>
          <Modal.Body>{ this.props.player.name }</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
        <div>
          <form
            className="player-guess"
            onSubmit={this.sendGuess}
            onChange={this.handleSearch}
          >
            <input
              type="text"
              className="guess-input"
              name="guess-input"
              id="guess-input"
              placeholder={`Guess ${this.state.id} of 8`}
              disabled={this.props.success || this.props.fail ? true : false}
            />
          </form>
        </div>
        <div>
          {
            this.state.input.length > 0 && (
              <ul className="results-listings" onClick={this.showCell}>
                {resultsListing}
              </ul>
            )
          }
        </div>
      </div>
    );
  }
}

export default Guess;
