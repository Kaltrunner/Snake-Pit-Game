import React from 'react';

function Scores({ scores }) {

// const {id, initials, score} = score

        return (
            <div className="scores">

               { scores.map((score) => {
                return (
                    <h3 className="scorez" key={score.id} >  {score.initials}  -  Score: {score.score}</h3>
                )
               })}

            </div>
        )
    }



export default Scores;
