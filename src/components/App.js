import React from 'react';
import GameOver from "./GameOver";
import EndScreen from "./EndScreen";
import Home from "./Home";
import Game from "./Game";
import { Routes, Route, useNavigate } from "react-router-dom"

function App() {

  const navigate = useNavigate()

  function handleGameOver() {
    alert("Game Over Man!")
    navigate('/GameOver');
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Game" element={<Game handleGameOver={handleGameOver} />} />
      <Route path="/GameOver" element={<GameOver />} />
      <Route path="/EndScreen" element={<EndScreen/>} />
      
    </Routes>
  );
}

export default App;
