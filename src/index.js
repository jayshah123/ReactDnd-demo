import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Experiment from "./Experiment";

function App() {
  return (
    <div className="App">
      <Experiment />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
