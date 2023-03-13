import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function GameOver({ handleNewScoreArray }) {
  const [initials, setInitials] = useState("");

  const { state } = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4001/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        initials: initials.toUpperCase(),
        score: state.finalScore,
      }),
    })
      .then((res) => res.json())
      .then((newScore) => handleNewScoreArray(newScore));
  }

  return (
    <div>
      <div className="gameOverText">
        <h1>Game Over!</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="enterInitials">
          <h3 className="yourScore"> your score - {state.finalScore}</h3>
          <h3 className="submitText">Enter your initials</h3>
          <br/>
          <input
            onkeyup=" e.target = e.target.toUpperCase()"
            minLength="3"
            maxLength="3"
            type="text"
            name="initials"
            value={initials}
            placeholder="- - -"
            onChange={(e) => setInitials(e.target.value)}
          />

          <input type="submit" value="Submit" />

          <br/>
        </form>
        {/* <div></div> */}
      </div>
    </div>
  );
}

export default GameOver;
