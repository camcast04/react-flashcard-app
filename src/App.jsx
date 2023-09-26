import { useState } from 'react';
import './App.css';
import flashcards from './flashcardsData';
import sun from './assets/sun.png';
import mars from './assets/mars.png';
import moon from './assets/moon.png';
import astronaut from './assets/astronaut.png';
import galaxy from './assets/galaxy.png';
import revolvearoundsun from './assets/revolvearoundsun.png';
import saturn from './assets/saturn.png';
import pluto from './assets/pluto.png';
import starlight from './assets/starlight.png';

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCurrentCardIndex(0); // Loop back to the start
    }
    setShowAnswer(false); // Reset to showing the question
  };

  const getCardImage = () => {
    switch (flashcards[currentCardIndex].answer) {
      case 'The Sun':
        return sun;
      case 'Mars':
        return mars;
      case 'Jupiter!':
        return astronaut;
      case 'The Milky Way':
        return galaxy;
      case 'Jupiter':
        return moon;
      case 'Venus':
        return revolvearoundsun;
      case 'Neil Armstrong':
        return astronaut;
      case 'Saturn':
        return saturn;
      case 'Pluto':
        return pluto;
      default:
        return starlight;
    }
  };

  const currentDifficulty =
    flashcards[currentCardIndex].difficulty.toLowerCase();

  return (
    <>
      <h1>Our Galaxy 🪐 </h1>
      <h3>Are you the next Carl Sagan? Lets find out!</h3>
      <div className={`card-container ${currentDifficulty}`}>
        <div
          className={`card ${showAnswer ? 'flipped' : ''}`}
          onClick={() => setShowAnswer(!showAnswer)}
        >
          <div className="card-face front">
            {flashcards[currentCardIndex].question}
          </div>
          <div className="card-face back">
            <div className="answer-container">
              <p className="answer-text">
                {flashcards[currentCardIndex].answer}
              </p>
              <img
                src={getCardImage()}
                alt="Answer visual representation"
                className="card-image"
              />
            </div>
          </div>
        </div>
      </div>
      <button onClick={nextCard}>Next 💫</button>
    </>
  );
}

export default App;
