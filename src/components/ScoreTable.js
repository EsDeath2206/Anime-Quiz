import React from 'react';
import './Question.css';

const ScoreTable = ({ scores }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Joueur</th>
            <th>Score</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{score.player}</td>
              <td>{score.points}</td>
              <td>{score.mode}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total des scores : {scores.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ScoreTable;
