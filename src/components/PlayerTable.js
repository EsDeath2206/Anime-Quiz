import React from 'react';
import './PlayerTable.css';

const PlayerTable = ({ players }) => {
  return (
    <div className="table-container">
      <h2>Tableau des Joueurs</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
