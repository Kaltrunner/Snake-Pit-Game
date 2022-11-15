import React from 'react';
import GameOver from "./GameOver";
import EndScreen from "./EndScreen";
import Home from "./Home";
import Game from "./Game";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Game" element={<Game />} />
      <Route path="/GameOver" element={<GameOver />} />
      <Route path="/EndScreen" element={<EndScreen/>} />
      
    </Routes>
  );
}

export default App;
