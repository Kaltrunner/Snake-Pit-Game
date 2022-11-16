import React, { useState, useEffect } from 'react';
import GameOver from "./GameOver";
import EndScreen from "./EndScreen";
import Home from "./Home";
import Game from "./Game";
import { Routes, Route, useNavigate } from "react-router-dom"

function App() {

  const navigate = useNavigate()
  const [scores, setScores] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/scores")
    .then((res) => res.json())
    .then((data) => setScores(data))
  },[])

  function handleGameOver() {
    // alert("Game Over Man!")
    navigate('/GameOver');
  }

  function handleNewScoreArray(newScore) {
    const newScoreArray = [...scores, newScore]
    setScores(newScoreArray)
    navigate('/EndScreen')
  }

  
// https://cdn.pixabay.com/download/audio/2022/08/09/audio_4bd7b03f6c.mp3?filename=feed-the-machine-classic-arcade-game-116846.mp3

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Game" element={<Game handleGameOver={handleGameOver} />} />
      <Route path="/GameOver" element={<GameOver handleNewScoreArray={handleNewScoreArray} />} />
      <Route path="/EndScreen" element={<EndScreen scores={scores} handleNewScoreArray={handleNewScoreArray} />} />
      
    </Routes>
  );
}

export default App;
