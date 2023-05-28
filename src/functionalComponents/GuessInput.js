/**
 * TODO:
 * Refactor Guess Input as a Functional Component
 * Refactor using React Bootstrap
 * Refactor using Redux
 * Move JSON data to MongoDB
 */
import { useState } from "react";
import players from '../players-current.json';
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/GuessInput.css";
import { useDispatch } from "react-redux";
import { incorrectGuess, correctGuess } from "../actions/appActions";

const GuessInput = () => {
    const dispatch = useDispatch();
    let appState = useSelector(state => state.app);
    const mysteryPlayer = appState.player;
    const guesses = appState.guesses;
    const [visible, setVisible] = useState(false);
    const [input, setInput] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [id, setId] = useState(1);
    const [results, setResults] = useState([]);
    const [resultsListing, setResultsListing] = useState(<></>);

    const handleClose = () => setVisible(false);
    
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

    const handleSearch = (e) => {
        setInput(e.target.value.toLowerCase());
        let resultsFiltered = items.filter((item) => item.name.toLowerCase().includes(input));
        if (resultsFiltered.length <= 5) {
            setResults(resultsFiltered);
        } else {
            setResults(resultsFiltered.slice(0, 5));
        }
        setResultsListing(() => {
            results.map((result, index) => {
                return (
                    <li className="results-listing" key={index}>
                        {result.name}
                    </li>
                )
            })
        })
    };

    const handleResultSelection = (e) => {
        // Capture name selection from results list
        let guessName = e.target.textContent;
        // Grab the player object which contains the selected name
        let guess = items.filter((item) => {
          return item.name.toLowerCase().includes(guessName.toLowerCase());
        });
        // Reset Input to Blank
        setInput("");
        // Submits selected player as a guess for the mystery player
        this.sendGuess(guess[0]);
      };

    const sendGuess = (playerGuess) => {
        const guess = {
            id,
            name: playerGuess.name,
            height: playerGuess.height,
            position: playerGuess.position,
            conference: playerGuess.conference,
            division: playerGuess.division,
            team: playerGuess.team,
            abbreviation: playerGuess.abbreviation,
            number: playerGuess.number,
            image: playerGuess.image,
            inches: playerGuess.inches
        }
        if (guesses.length < 7) {
            mysteryPlayer.name === playerGuess.name ?
                dispatch(correctGuess(guess)) :
                dispatch(incorrectGuess(guess)); 
        }
    }
    return (
        <Container>
            <Modal animation={true} centered={true} show={visible} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{ modalMessage }</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Form className="player-guess" onSubmit={sendGuess} onChange={handleSearch}>
                <Form.Control type="text" className="guess-input" id="guess-input" value={input}/>
            </Form>
            {input.length > 0 && (
                <ul className="results-listings" onClick={handleResultSelection}>
                    {resultsListing}
                </ul>
            )}
        </Container>
    )
}

export default GuessInput;