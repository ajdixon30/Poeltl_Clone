import "../styles/GuessesTable.css";
import Guess from "./Guess";
import { Table, Col} from "react-bootstrap";

const Guesses = (props) => {
  let guesses = props.guesses;
  return (
    <div className="guesses-container">
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
                <th>#</th>
              </tr>
            </thead>
            <tbody className="guesses-section">
              {guesses.map((guess, index) => {
                return (
                  <Guess
                    player={guess}
                    playerToGuess={props.playerToGuess}
                    id={guess.id}
                    text={guess.text}
                    count={index + 1}
                    key={index}
                  />
                );
              })}
            </tbody>
          </Table>
        )}
      </Col>
    </div>
  );
};

export default Guesses;
