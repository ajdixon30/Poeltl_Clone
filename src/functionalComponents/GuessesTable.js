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
        <div className="container justify-content-center pt-5">
            <div className="row">
                <div className="col-10 col-md-8 offset-1 offset-md-2">
                    {guesses.length > 0 && (
                        <table className="table guesses-table">
                            <thead>
                                <tr>
                                    <th className="col-3"></th>
                                    <th className="col-1">TEAM</th>
                                    <th className="col-1">CONF</th>
                                    <th className="col-3">DIV</th>
                                    <th className="col-1">HEIGHT</th>
                                    <th className="col-1">POS</th>
                                    <th className="col-1">AGE</th>
                                    <th className="col-1">#</th>
                                </tr>
                            </thead>
                            <tbody>
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
                        </table>
                    )}
                </div>
            </div>
            {/* <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
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
            </Col> */}
        </div>
    )
}

export default GuessTable;