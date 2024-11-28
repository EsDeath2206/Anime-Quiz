import React from 'react';
import './Question.css';

const Question = ({ question, options, handleAnswer, userAnswer }) => {
  return (
    <div className="question">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            className={userAnswer === option ? 'selected' : ''}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
