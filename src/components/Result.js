import React from "react";

const Result = ({score, playAgain}) => (
    <div className="score-goard">
        <div className="score">You scored {score} / 5 correct answers!</div>
        <button className="playButton" onClick={playAgain}>
            Play again!
        </button>
    </div>
);

export default Result;