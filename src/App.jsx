import characters from './Components/characters';
import GameBoard from './Components/GameBoard';
import { useState, useEffect } from 'react';
import ScoreBoard from './Components/ScoreBoard';
import './App.css';

function App() {
  const [choices, setChoices] = useState(characters);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  function handleReset() {
    setChoices(characters);
    setScore(0);
    setGameOver(true);
  }

  useEffect(() => {
    setBestScore((prevBestScore) => Math.max(score, prevBestScore));
    setFinalScore(score);
  }, [score]);

  function gameReset() {
    setGameOver(false);
  }

  function gameRestart() {
    handleReset();
    setGameOver(false);
  }

  if (gameOver) {
    return (
      <div className="game-over">
        <h1>Game Over ☠️</h1>
        <h2>Your Score: {finalScore}</h2>
        <button onClick={gameReset}>Restart</button>
      </div>
    )
  }
  else if (score >= 10) {
    return (
      <div className="game-won">
        <h1>7 Crore</h1>
        <h2>👉🧠</h2>
        <h2>Your Score: {finalScore}</h2>
        <button onClick={gameRestart}>Restart</button>
      </div>
    );
  }
  return (
    <>
      <ScoreBoard score={score} bestScore={bestScore} />
      <GameBoard score={score} setScore={setScore} choices={choices} setChoices={setChoices} handleReset={handleReset} />
    </>
  );
}

export default App
