import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import Score from './components/Score';
import PlayerTable from './components/PlayerTable';

const App = () => {
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const savedPlayers = localStorage.getItem('anime-quiz-players');
    if (savedPlayers) setPlayers(JSON.parse(savedPlayers));
  }, []);

  const updateScore = (newScore) => {
    setScore(newScore);
  };

  const addPlayer = (playerName) => {
    const newPlayers = [...players, { name: playerName, score }];
    setPlayers(newPlayers);
    localStorage.setItem('anime-quiz-players', JSON.stringify(newPlayers));
  };

  return (
    <div className="app">
      {quizFinished ? (
        <div>
          <Score score={score} />
          <div className="player-form">
            <input
              type="text"
              placeholder="Nom du joueur"
              id="player-name"
            />
            <button
              onClick={() => {
                const playerName = document.getElementById('player-name').value;
                if (playerName) addPlayer(playerName);
              }}
            >
              Ajouter joueur
            </button>
          </div>
          <PlayerTable players={players} />
        </div>
      ) : (
        <Quiz updateScore={updateScore} setQuizFinished={setQuizFinished} />
      )}
    </div>
  );
};

export default App;
