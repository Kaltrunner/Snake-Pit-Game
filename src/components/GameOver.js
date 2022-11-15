import React from "react"
import { Link } from "react-router-dom";

function GameOver() {

    return (

    <div>
        <div className="gameOverText" >
            <h1>Game Over!</h1>
        </div>
        <div>
        <form className="enterInitials" >
            <h3 className="yourScore" >your score -</h3>
            <h3 className="submitText" >Enter your initials</h3>
            <br/>
            <input 
            type="text"
            name="initials"
            // value={initials}
            placeholder="- - -"
            // onChange={(e) => setInitials(e.target.value)}
            />
            <Link to="/EndScreen">
                <input 
                type="submit"
                name="submit"
                value="Submit"
                className="submit"
                />
                </Link>
            <br/>
        </form>
        <div></div>
        </div>
    </div>

    )
}

export default GameOver;