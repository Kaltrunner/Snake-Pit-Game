import { Link } from "react-router-dom";
import Scores from "./Scores"

function EndScreen({ scores }) {

return (
    <div>
        <div>
            <h1 className="highScoreText" >High Scores</h1>
        </div>
        <div id="scroll-container">
            <div id="scroll-text" >
                <h1 className="scoreScroll" > High Scores <br/>  </h1>
                <Scores scores={scores} />
            </div>
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
