/**
 * TODO:
 * Refactor Start Game as a Functional Component
 * Refactor using React Bootstrap
 * Refactor using Redux
 * Move JSON data to MongoDB
 */

import { Container } from "react-bootstrap";
import "../styles/StartGame.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { callPlayersAPI } from "../actions/appActions";

const StartGame = () => {
    // useEffect(() => {
    //     newPlayer()
    // }, []);
    let dispatch = useDispatch();
    let mysteryPlayer = useSelector((state) => state.app.player);
    const startGame = () => {
        let id = Math.floor(Math.random() * 499);
        dispatch(callPlayersAPI(id));
    };
    return (
        <Container className="temp-container">
            <button className="btn-poeltl" onClick={startGame}>New Game</button>
            <h1>{mysteryPlayer ? mysteryPlayer.name : ''}</h1>
        </Container>
    )
}

export default StartGame;