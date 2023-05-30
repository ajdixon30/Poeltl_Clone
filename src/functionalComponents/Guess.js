/**
 * TODO:
 * Refactor Guess as a Functional Component
 * Refactor using React Bootstrap
 * Refactor using Redux
 * Move JSON data to MongoDB
 */

import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import "../styles/Guess.css";

const Guess = (props) => {
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
              {props.player.height}
              <br />
              <AiOutlineArrowUp />
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
              {props.player.height}
              <br />
              <AiOutlineArrowUp />
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
            <td className="listing-category">
              {props.player.height}
              <br />
              <AiOutlineArrowUp />
            </td>
          )}
          {props.playerToGuess.inches < props.player.inches - 2 && (
            <td className="listing-category">
              {props.player.height}
              <br />
              <AiOutlineArrowDown />
            </td>
          )}
          {(props.player.position !== props.playerToGuess.position) ? (props.player.position.includes(props.playerToGuess.position) || props.playerToGuess.position.includes(props.player.position) ? (
            <td
            className="listing-category"
            style={{
              background: "#f4e878",
              boxShadow: "inset 0px 6px 6px #a1a1a1",
              color: "#313131",
            }}
            >
              {props.player.position}
            </td>
          ) : (
            <td className="listing-category">
              {props.player.position}
            </td> 
          )) : (
            <td
            className="listing-category"
              style={{
                background: "#37be75",
                color: "white",
              }}
            >
              {props.player.position}
            </td>
        )}
        {props.player.age === props.playerToGuess.age && (
          <td
            className="listing-category"
              style={{
                background: "#37be75",
                color: "white",
              }}
            >
              {props.player.age}
            </td>
          )}
          {props.player.age + 1 === props.playerToGuess.age && (
          <td
            className="listing-category"
              style={{
                background: "#f4e878",
                boxShadow: "inset 0px 6px 6px #a1a1a1",
                color: "#313131",
              }}
            >
              {props.player.age}
              <br />
              <AiOutlineArrowUp />
            </td>
          )}
          {props.player.age + 2 === props.playerToGuess.age && (
          <td
            className="listing-category"
              style={{
                background: "#f4e878",
                boxShadow: "inset 0px 6px 6px #a1a1a1",
                color: "#313131",
              }}
            >
              {props.player.age}
              <br />
              <AiOutlineArrowUp />
            </td>
          )}
          {props.player.age - 1 === props.playerToGuess.age && (
          <td
            className="listing-category"
              style={{
                background: "#f4e878",
                boxShadow: "inset 0px 6px 6px #a1a1a1",
                color: "#313131",
              }}
            >
              {props.player.age}
              <br />
              <AiOutlineArrowDown />
            </td>
          )}
          {props.player.age - 2 === props.playerToGuess.age && (
          <td
            className="listing-category"
              style={{
                background: "#f4e878",
                boxShadow: "inset 0px 6px 6px #a1a1a1",
                color: "#313131",
              }}
            >
              {props.player.age}
              <br />
              <AiOutlineArrowDown />
            </td>
          )}
          {props.playerToGuess.age > props.player.age + 2 && (
            <td className="listing-category">
              {props.player.age}
              <br />
              <AiOutlineArrowUp />
            </td>
          )}
          {props.playerToGuess.age < props.player.age - 2 && (
            <td className="listing-category">
              {props.player.age}
              <br />
              <AiOutlineArrowDown />
            </td>
          )}
          {props.player.number === props.playerToGuess.number && (
          <td
          className="listing-category"
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
          className="listing-category"
              style={{
                background: "#f4e878",
                boxShadow: "inset 0px 6px 6px #a1a1a1",
                color: "#313131",
              }}
            >
              {props.player.number}
              <br />
              <AiOutlineArrowUp />
            </td>
          )}
          {props.player.number + 2 === props.playerToGuess.number && (
          <td
          className="listing-category"
              style={{
                background: "#f4e878",
                boxShadow: "inset 0px 6px 6px #a1a1a1",
                color: "#313131",
              }}
            >
              {props.player.number}
              <br />
              <AiOutlineArrowUp />
            </td>
          )}
          {props.player.number - 1 === props.playerToGuess.number && (
          <td
          className="listing-category"
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
          className="listing-category"
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
            <td className="listing-category">
              {props.player.number}
              <br />
              <AiOutlineArrowUp />
            </td>
          )}
          {props.playerToGuess.number < props.player.number - 2 && (
            <td className="listing-category">
              {props.player.number}
              <br />
              <AiOutlineArrowDown />
            </td>
          )}
        </tr>
      );
}

export default Guess;