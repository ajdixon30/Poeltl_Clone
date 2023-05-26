import React from "react";
import "../styles/Guess.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Guess = (props) => {
  // if (props.player.division === "Atlantic") {
  //   props.player.division = "ATL";
  // } else if (props.player.division === "Southwest") {
  //   props.player.division = "SW";
  // } else if (props.player.division === "Southeast") {
  //   props.player.division = "SE";
  // } else if (props.player.division === "Central") {
  //   props.player.division = "CNT";
  // } else if (props.player.division === "Northwest") {
  //   props.player.division = "NW";
  // } else if (props.player.division === "Pacific") {
  //   props.player.division = "PAC";
  // }
  return (
    <tr className="guess-listing">
      <td
        className="listing-category"
        style={{
          background:
            props.player.name === props.playerToGuess.name && "#37be75",
          color: props.player.name === props.playerToGuess.name && "white",
          fontSize: 20,
          fontWeight: 700,
          textAlign: "left",
        }}
      >
        {props.player.name}
      </td>
      <td
        className="listing-category"
        style={{
          background:
            props.player.team === props.playerToGuess.team && "#37be75",
          color: props.player.team === props.playerToGuess.team && "white",
        }}
      >
        <img src={props.player.image} alt="team-logo" />
        <br />
        {props.player.abbreviation}
      </td>
      <td
        className="listing-category"
        style={{
          background:
            props.player.conference === props.playerToGuess.conference &&
            "#37be75",
          color:
            props.player.conference === props.playerToGuess.conference &&
            "white",
        }}
      >
        {props.player.conference}
      </td>
      <td
        className="listing-category"
        style={{
          background:
            props.player.division === props.playerToGuess.division && "#37be75",
          color:
            props.player.division === props.playerToGuess.division && "white",
        }}
      >
        {props.player.division}
      </td>
      {props.player.inches === props.playerToGuess.inches && (
        <td
          className="listing-category"
          style={{
            background: "#37be75",
            color: "white",
          }}
        >
          {props.player.height}
        </td>
      )}
      {props.player.inches + 1 === props.playerToGuess.inches && (
        <td
        className="listing-category"
          style={{
            background: "#f4e878",
            boxShadow: "inset 0px 6px 6px #a1a1a1",
            color: "#313131",
          }}
        >
          <AiOutlineArrowUp />
          <br />
          {props.player.height}
        </td>
      )}
      {props.player.inches + 2 === props.playerToGuess.inches && (
        <td
        className="listing-category"
          style={{
            background: "#f4e878",
            boxShadow: "inset 0px 6px 6px #a1a1a1",
            color: "#313131",
          }}
        >
          <AiOutlineArrowUp />
          <br />
          {props.player.height}
        </td>
      )}
      {props.player.inches - 1 === props.playerToGuess.inches && (
        <td
        className="listing-category"
          style={{
            background: "#f4e878",
            boxShadow: "inset 0px 6px 6px #a1a1a1",
            color: "#313131",
          }}
        >
          {props.player.height}
          <br />
          <AiOutlineArrowDown />
        </td>
      )}
      {props.player.inches - 2 === props.playerToGuess.inches && (
        <td
        className="listing-category"
          style={{
            background: "#f4e878",
            boxShadow: "inset 0px 6px 6px #a1a1a1",
            color: "#313131",
          }}
        >
          {props.player.height}
          <br />
          <AiOutlineArrowDown />
        </td>
      )}
      {props.playerToGuess.inches > props.player.inches + 2 && (
        <td>
          <AiOutlineArrowUp />
          <br />
          {props.player.height}
        </td>
      )}
      {props.playerToGuess.inches < props.player.inches - 2 && (
        <td>
          {props.player.height}
          <br />
          <AiOutlineArrowDown />
        </td>
      )}
      {/* <td
        className="listing-category"
        style={{
          background:
            props.player.height === props.playerToGuess.height && "#37be75",
          color: props.player.height === props.playerToGuess.height && "white",
        }}
      >
        {props.player.height}
      </td> */}
      <td
        className="listing-category"
        style={{
          background:
            props.player.position === props.playerToGuess.position && "#37be75",
          color:
            props.player.position === props.playerToGuess.position && "white",
        }}
      >
        {props.player.position}
      </td>
      {props.player.number === props.playerToGuess.number && (
        <td
          style={{
            background: "#37be75",
            color: "white",
          }}
        >
          {props.player.number}
        </td>
      )}
      {props.player.number + 1 === props.playerToGuess.number && (
        <td
          style={{
            background: "#f4e878",
            boxShadow: "inset 0px 6px 6px #a1a1a1",
            color: "#313131",
          }}
        >
          <AiOutlineArrowUp />
          <br />
          {props.player.number}
        </td>
      )}
      {props.player.number + 2 === props.playerToGuess.number && (
        <td
          style={{
            background: "#f4e878",
            boxShadow: "inset 0px 6px 6px #a1a1a1",
            color: "#313131",
          }}
        >
          <AiOutlineArrowUp />
          <br />
          {props.player.number}
        </td>
      )}
      {props.player.number - 1 === props.playerToGuess.number && (
        <td
          style={{
            background: "#f4e878",
            boxShadow: "inset 0px 6px 6px #a1a1a1",
            color: "#313131",
          }}
        >
          {props.player.number}
          <br />
          <AiOutlineArrowDown />
        </td>
      )}
      {props.player.number - 2 === props.playerToGuess.number && (
        <td
          style={{
            background: "#f4e878",
            boxShadow: "inset 0px 6px 6px #a1a1a1",
            color: "#313131",
          }}
        >
          {props.player.number}
          <br />
          <AiOutlineArrowDown />
        </td>
      )}
      {props.playerToGuess.number > props.player.number + 2 && (
        <td>
          <AiOutlineArrowUp />
          <br />
          {props.player.number}
        </td>
      )}
      {props.playerToGuess.number < props.player.number - 2 && (
        <td>
          {props.player.number}
          <br />
          <AiOutlineArrowDown />
        </td>
      )}
      {/* <td
        className="listing-category"
        style={{
          background:
            props.player.number === props.playerToGuess.number && "#37be75",
          color: props.player.number === props.playerToGuess.number && "white",
        }}
      >
        {props.player.number}
      </td> */}
    </tr>
  );
};

export default Guess;
