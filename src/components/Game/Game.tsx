import React from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/reducers/reducers";

const Game: React.FC = () => {
  const { players } = useSelector((state: RootStateType) => ({
    players: state.tournaments.playerArray
  }));

  return (
    <div className="game">
      <div className="game__score">
        <h1>Display Score</h1>
      </div>
      <div className="game__players">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Points</th>
              <th>Big Points</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => {
              return (
                <tr key={player.in_tournament_id}>
                  <td>{player.name}</td>
                  <td>{player.points}</td>
                  <td>{player.big_points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Game;
