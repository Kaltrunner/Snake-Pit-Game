import { Link, } from "react-router-dom";

function Home() {

    function play() {
    new Audio("https://cdn.pixabay.com/download/audio/2022/08/09/audio_969f988755.mp3?filename=arcade-machines-classic-arcade-game-116836.mp3").play()
    const songTimer = setInterval(play, 84000)
    console.log(songTimer)
    }

    return (
        <div>
            <div>
            <h1 className="snakeHome" > Snake Pit </h1>
            </div>
            <div className="gameButtonDiv" >
                <Link to="/Game">
                    <button className="homeButton" onClick={play} >  𓆙  </button>
                </Link>
            </div>
            <div className="scoreScrollDiv" >
            </div>
        </div>
    )
}

export default Home;