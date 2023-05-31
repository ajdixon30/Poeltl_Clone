import React from "react";
import Header from "./functionalComponents/Header";
import StartGame from "./functionalComponents/StartGame";
import GuessInput from "./functionalComponents/GuessInput";
import GuessesTable from "./functionalComponents/GuessesTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <StartGame />
        <GuessInput />
        <GuessesTable />
      </Provider>
    );
  }
}

export default App;
