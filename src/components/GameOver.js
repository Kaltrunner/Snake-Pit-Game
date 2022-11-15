import React from "react"

function GameOver() {
    return (

    <div>
        <div className="gameOverText" >
            <h1>Game Over!</h1>
        </div>
        <div>
        <form className="enterInitials" >
            <h3>Enter your initials</h3>
            <br/>
            <input 
            type="text"
            name="initials"
            // value={initials}
            placeholder="XXX"
            // onChange={(e) => setInitials(e.target.value)}
            />
            <br/>
            <input
            type="submit"
            name="submit"
            value="Submit"
            className="submit"
            />
            <br/>
        </form>
        </div>
    </div>

    )
}

export default GameOver;