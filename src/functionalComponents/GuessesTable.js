/**
 * TODO:
 * Refactor Guess Table as a Functional Component
 * Refactor using React Bootstrap
 * Refactor using Redux
 * Move JSON data to MongoDB
 */

import { Col, Container, Table } from "react-bootstrap";
import Guess from "../functionalComponents/Guess";
import "../styles/GuessesTable.css";
import { useSelector } from "react-redux";

const GuessTable = () => {
    const appState = useSelector(state => state.app);
    let guesses = appState.guesses ? appState.guesses : [];
    let playerToGuess = appState.player ? appState.player : {};
    return (
        <Container className="guesses-container">
            <Col xs={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                {guesses.length > 0 && (
                    <Table className="guesses-table">
                        <thead className="guesses-header">
                            <tr>
                                <th></th>
                                <th>TEAM</th>
                                <th>CONF</th>
                                <th>DIV</th>
                                <th>HEIGHT</th>
                                <th>POS</th>
                                <th>AGE</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody className="guesses-section">
                            {guesses.map((guess, index) => {
                                return (
                                    <Guess
                                        player={guess}
                                        playerToGuess={playerToGuess}
                                        id={guess.id}
                                        text={guess.text}
                                        count={index + 1}
                                        key={index}
                                    />
                                )
                            })}
                        </tbody>
                    </Table>
                )}
            </Col>
        </Container>
    )
}

export default GuessTable;