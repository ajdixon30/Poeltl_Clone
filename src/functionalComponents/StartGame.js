/**
 * TODO:
 * Refactor Start Game as a Functional Component
 * Refactor using React Bootstrap
 * Refactor using Redux
 * Move JSON data to MongoDB
 */

import { Container } from "react-bootstrap";
import "../styles/StartGame.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { callPlayersAPI } from "../actions/appActions";

const StartGame = () => {
    let dispatch = useDispatch();
    const startGame = () => {
        let id = Math.floor(Math.random() * 219);
        dispatch(callPlayersAPI(id));
    };
    useEffect(() => {
        startGame();
    }, []);
    return (
        <Container className="temp-container">
            <button className="btn-poeltl" onClick={startGame}>New Game</button>
        </Container>
    )
}

export default StartGame;