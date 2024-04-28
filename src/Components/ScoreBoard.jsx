import PropTypes from "prop-types";

function ScoreBoard({score, bestScore}) {
  return (
    <div className="score-board">
      <h1>Score: {score}</h1>
      <h1>Best Score: {bestScore}</h1>
    </div>
  );
}

ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired
}

export default ScoreBoard;