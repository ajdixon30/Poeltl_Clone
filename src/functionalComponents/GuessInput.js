/**
 * TODO:
 * Refactor Guess Input as a Functional Component
 * Refactor using React Bootstrap
 * Refactor using Redux
 * Move JSON data to MongoDB
 */
import { useState } from "react";
import players from '../players-current.json';
import { Button, Container, Form, Modal, Col, Row, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/GuessInput.css";
import { useDispatch } from "react-redux";
import { incorrectGuess, correctGuess, gameOver } from "../actions/appActions";

const GuessInput = () => {
    const dispatch = useDispatch();
    let appState = useSelector(state => state.app);
    const mysteryPlayer = appState.player ? appState.player : {name:""};
    const guesses = appState.guesses ? appState.guesses : [];
    const modalMessage = appState.modalMessage ? appState.modalMessage : '';
    const disabled = appState.inputDisabled ? appState.inputDisabled : false;
    const placeholder = appState.placeholder ? appState.placeholder : '';
    const [visible, setVisible] = useState(false);
    const [input, setInput] = useState('');
    const [id, setId] = useState(1);
    const [results, setResults] = useState([]);
    let resultsFiltered;

    const handleClose = () => setVisible(false);
    
    const items = players.players.slice(0, 220).map((player) => {
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
        headshot: player.headshot,
            age: player.age,
          positions: player.positions,
        };
    });

    const handleSearch = (e) => {
        setInput(e.target.value.toLowerCase());
        resultsFiltered = items.filter((item) => {
            const names = item.name.toLowerCase().split(" ");
            return names[0].startsWith(e.target.value.toLowerCase()) || names[1].startsWith(e.target.value.toLowerCase()) || item.name.toLowerCase().startsWith(e.target.value.toLowerCase())
        });
        if (resultsFiltered.length <= 5) {
            setResults(resultsFiltered);
        } else {
            setResults(resultsFiltered.slice(0, 5));
        }
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
        sendGuess(guess[0]);
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
            inches: playerGuess.inches,
            headshot: playerGuess.headshot,
            age: playerGuess.age,
        }
        const newGuessArr = guesses.concat(guess);
        const updatedId = id + 1;
        console.log(updatedId);
        setId((id) => id + 1);
        if (mysteryPlayer.name === playerGuess.name) {
            dispatch(correctGuess(mysteryPlayer, newGuessArr));
            setVisible(true);
            setId(1);
        }
        if (guesses.length < 7 && mysteryPlayer.name !== playerGuess.name) {
            dispatch(incorrectGuess(mysteryPlayer, newGuessArr, updatedId));
        }
        if (guesses.length === 7 && mysteryPlayer.name !== playerGuess.name) {
            dispatch(gameOver(mysteryPlayer, newGuessArr));
            setVisible(true);
            setId(1);
        }
    }
    return (
        <Container>
            <Modal animation={true} centered={true} show={visible} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{ modalMessage }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image fluid src={mysteryPlayer.headshot} alt="Mystery Player Headshot" />
                    {mysteryPlayer.name}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Row>
                <Col xs={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }}>
                    <Form className="player-guess" onSubmit={sendGuess}>
                        <Form.Control type="text" className="guess-input" id="guess-input" value={input} onChange={handleSearch} placeholder={placeholder} disabled={disabled} />
                    </Form>
                    {input.length > 0 && (
                        <ul className="results-listings" onClick={handleResultSelection}>
                            {results.map((result, index) => {
                                return (
                                    <li className="results-listing" key={index}>
                                        {result.name}
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default GuessInput;