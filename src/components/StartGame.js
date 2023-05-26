import React from "react";
import "../styles/StartGame.css";
//import { Button } from "react-bootstrap";

const StartGame = (props) => {
  // if (props.player.name) {
  //   console.log(props.player.name);
  // }
  return (
    <div className="temp-container">
      <button className="btn-start fw-bold fs-4" onClick={props.newGame}>
        New Game
      </button>
    </div>
  );
};

export default StartGame;
