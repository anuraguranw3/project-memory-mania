import PropTypes from "prop-types";
import clickSound from '/src/assets/sounds/click.mp3';
import { useState } from "react";

function GameBoard({ score, setScore, choices, setChoices, handleReset }) {

  const [rotate, setRotate] = useState(false);

  function handleCardClick(e, element) {
    playClickSound();

    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 600);

    if (element.checked) {
      handleReset();
    }
    else {
      const updatedChoices = choices.map((card) => {
        return card.id === element.id ? { ...card, checked: true } : card;
      });
      setScore(score + 1);
      setChoices(updatedChoices);
      shuffle(updatedChoices);
    }
  }

  function shuffle(choic) {
    let currentIndex = choic.length;
    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [choic[currentIndex], choic[randomIndex]] = [choic[randomIndex], choic[currentIndex]];
    }
  }

  function playClickSound() {
    const audio = new Audio(clickSound);
    audio.currentTime = 0;
    audio.play();
  }

  return (
    <>
      <ul className="game-board">
        {
          choices.map(element => (
            <li className={`main-card ${rotate ? "spin-animation" : ''}`} key={element.id} onClick={(e) => { handleCardClick(e, element); }}>
              <div className="game-card">
                <img src={element.src} alt="image" />
                <h1>{element.name}</h1>
              </div>
            </li>
          ))
        }
      </ul>
    </>
  );
}

GameBoard.propTypes = {
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  choices: PropTypes.array.isRequired,
  setChoices: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
}

export default GameBoard;