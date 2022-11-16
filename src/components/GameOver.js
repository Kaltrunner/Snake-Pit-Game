import React, { useState } from "react"
import { Link } from "react-router-dom";

function GameOver({ handleNewScoreArray }) {

    const [initials, setInitials] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/scores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                initials: initials,
            })
        })
        .then((res) => res.json())
        .then((newScore) => handleNewScoreArray(newScore))
    }

    // console.log({initials})

    return (
    <div>
        <div className="gameOverText" >
            <h1>Game Over!</h1>
        </div>
        <div>
        <form onSubmit={handleSubmit} className="enterInitials" >
            <h3 className="yourScore" > your score -  </h3>
            <h3 className="submitText" >Enter your initials</h3>
            <br/>
            <input 
            onkeyup=" e.target = e.target.toUpperCase()"
            minLength="3"
            maxlength="3"
            type="text"
            name="initials"
            value={initials}
            placeholder="- - -"
            onChange={(e) => setInitials(e.target.value)}
            />
            
                <input 
                type="submit"
                value="Submit"
                />
           
            <br/>
        </form>
        <div></div>
        </div>
    </div>

    )
}

export default GameOver;