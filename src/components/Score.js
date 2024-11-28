import React from 'react';
import Badge from './Badge';

const Score = ({ score }) => {
  return (
    <div>
      <h2>Votre score: {score}</h2>
      <Badge score={score} />
    </div>
  );
};

export default Score;
