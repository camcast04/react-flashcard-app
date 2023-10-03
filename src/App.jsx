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
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const checkAnswer = () => {
    if (
      userGuess.toLowerCase() ===
      flashcards[currentCardIndex].answer.toLowerCase()
    ) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect!');
    }
    setShowAnswer(true);
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    } else {
      setCurrentCardIndex(flashcards.length - 1);
    }
    setShowAnswer(false);
  };

  const nextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCurrentCardIndex(0);
    }
    setShowAnswer(false);
  };

  const imageMapping = {
    'The Sun': sun,
    Mars: mars,
    'Jupiter!': astronaut,
    'The Milky Way': galaxy,
    Jupiter: moon,
    Venus: revolvearoundsun,
    'Neil Armstrong': astronaut,
    Saturn: saturn,
    Pluto: pluto,
  };

  const getCardImage = () => {
    return imageMapping[flashcards[currentCardIndex].answer] || starlight;
  };

  if (!flashcards[currentCardIndex]) {
    return <div>Error: Card not found!</div>;
  }

  const currentDifficulty =
    flashcards[currentCardIndex].difficulty.toLowerCase();

  return (
    <>
      <h1>Our Galaxy 🪐 </h1>
      <h3>Are you the next Carl Sagan? Lets find out!</h3>
      <h5>Number of cards: {flashcards.length}</h5>
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
      <div className="user-input-container">
        <input
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="Your guess..."
        />
        <button onClick={checkAnswer} disabled={!userGuess}>
          Submit
        </button>
      </div>
      <div className="feedback-container">{feedback}</div>
      <button onClick={prevCard}>Back</button>
      <button onClick={nextCard}>Next 💫</button>
      <button onClick={nextCard}>Skip</button>
    </>
  );
}

export default App;
