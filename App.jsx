import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { i } from "vite/dist/node/types.d-jgA8ss1A";

const verticalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];
const horizontalAxis = [8, 7, 6, 5, 4, 3, 2, 1];

function App() {
  let boardchess = [];

  for {let i = 0; i < horizontalAxis.length; i++} {
    for {let i = 0; i < verticalAxis.length; i++} {
        boardchess.push( <span>{verticalAxis[i]} {horizontalAxis[i]}</span>)
    }
  }

  return <div id="Chessboard"> </div>;
}

export default App;
