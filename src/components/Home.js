import { Link, } from "react-router-dom";

function Home() {

    return (
        <div>
            <div>
            <h1 className="snakeHome" >Snake Pit</h1>
            </div>
            <div className="gameButtonDiv" >
                <Link to="/Game">
                    <button className="homeButton" >  𓆙  </button>
                </Link>
            </div>
            <div className="scoreScrollDiv" >

            </div>
        </div>
      
    )


}

export default Home;