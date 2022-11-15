import { Link } from "react-router-dom";

function EndScreen() {
return (
    <div>
        <div>
            <h1 className="highScoreText" >High Scores</h1>
        </div>
        <div className="scores">
            
        </div>
        <br/>
       <Link to="/Game">
        <button className="playAgainButton" >Play Again</button>
        </Link>
        <Link to="/">
        <button className="menuButton" >Menu</button>
        </Link>
    </div>
)
}

export default EndScreen;