import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/reducers/reducers";
import { IPlayerFromDB } from "../../types";

const Game: React.FC = () => {
  const { players } = useSelector((state: RootStateType) => ({
    players: state.tournaments.playerArray
  }));
  const [gameNumber, setGameNumber] = useState(1);

  /* Current Game **/
  const teamA: IPlayerFromDB[] = [];
  const teamB: IPlayerFromDB[] = [];

  /* Next Game **/
  const nextTeamA: IPlayerFromDB[] = [];
  const nextTeamB: IPlayerFromDB[] = [];

  const compareValues = (arrayOfNumbers: number[], number: number) => {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      if (arrayOfNumbers[i] === number) {
        return true;
      }
    }
    return false;
  };

  players.forEach((player) => {
    switch (gameNumber) {
      case 1:
        if (compareValues([0, 1], player.in_tournament_id)) {
          teamA.push(player);
        } else if (compareValues([2, 3], player.in_tournament_id)) {
          teamB.push(player);
        }

        /* Creating Next Teams **/
        if (compareValues([0, 2], player.in_tournament_id)) {
          nextTeamA.push(player);
        } else if (compareValues([1, 3], player.in_tournament_id)) {
          nextTeamB.push(player);
        }

        break;
      case 2:
        if (player.in_tournament_id === 0 || player.in_tournament_id === 2) {
          teamA.push(player);
        } else if (
          player.in_tournament_id === 1 ||
          player.in_tournament_id === 3
        ) {
          teamB.push(player);
        }

        /* Creating Next Teams **/
        if (player.in_tournament_id === 0 || player.in_tournament_id === 3) {
          nextTeamA.push(player);
        } else if (
          player.in_tournament_id === 1 ||
          player.in_tournament_id === 2
        ) {
          nextTeamB.push(player);
        }

        break;
      case 3:
        if (player.in_tournament_id === 0 || player.in_tournament_id === 3) {
          teamA.push(player);
        } else if (
          player.in_tournament_id === 1 ||
          player.in_tournament_id === 2
        ) {
          teamB.push(player);
        }

        /* Creating Next Teams **/
        if (player.in_tournament_id === 0 || player.in_tournament_id === 1) {
          nextTeamA.push(player);
        } else if (
          player.in_tournament_id === 2 ||
          player.in_tournament_id === 3
        ) {
          nextTeamB.push(player);
        }

        break;
      case 4:
        if (player.in_tournament_id === 0 || player.in_tournament_id === 1) {
          teamA.push(player);
        } else if (
          player.in_tournament_id === 2 ||
          player.in_tournament_id === 3
        ) {
          teamB.push(player);
        }

        /* Creating Next Teams **/
        if (player.in_tournament_id === 0 || player.in_tournament_id === 2) {
          nextTeamA.push(player);
        } else if (
          player.in_tournament_id === 1 ||
          player.in_tournament_id === 3
        ) {
          nextTeamB.push(player);
        }
        break;
      case 5:
        if (player.in_tournament_id === 0 || player.in_tournament_id === 2) {
          teamA.push(player);
        } else if (
          player.in_tournament_id === 1 ||
          player.in_tournament_id === 3
        ) {
          teamB.push(player);
        }

        /* Creating Next Teams **/
        if (player.in_tournament_id === 0 || player.in_tournament_id === 3) {
          nextTeamA.push(player);
        } else if (
          player.in_tournament_id === 1 ||
          player.in_tournament_id === 2
        ) {
          nextTeamB.push(player);
        }
        break;
      case 6:
        if (player.in_tournament_id === 0 || player.in_tournament_id === 3) {
          teamA.push(player);
        } else if (
          player.in_tournament_id === 1 ||
          player.in_tournament_id === 2
        ) {
          teamB.push(player);
        }

        /* Creating Next Teams **/
        if (player.in_tournament_id === 0 || player.in_tournament_id === 1) {
          nextTeamA.push(player);
        } else if (
          player.in_tournament_id === 2 ||
          player.in_tournament_id === 3
        ) {
          nextTeamB.push(player);
        }
        break;
      case 7:
        if (player.in_tournament_id === 0 || player.in_tournament_id === 1) {
          teamA.push(player);
        } else if (
          player.in_tournament_id === 2 ||
          player.in_tournament_id === 3
        ) {
          teamB.push(player);
        }

        /* Creating Next Teams **/
        if (player.in_tournament_id === 0 || player.in_tournament_id === 2) {
          nextTeamA.push(player);
        } else if (
          player.in_tournament_id === 1 ||
          player.in_tournament_id === 3
        ) {
          nextTeamB.push(player);
        }
        break;
      case 8:
        if (player.in_tournament_id === 0 || player.in_tournament_id === 2) {
          teamA.push(player);
        } else if (
          player.in_tournament_id === 1 ||
          player.in_tournament_id === 3
        ) {
          teamB.push(player);
        }

        /* Creating Next Teams **/
        if (player.in_tournament_id === 0 || player.in_tournament_id === 3) {
          nextTeamA.push(player);
        } else if (
          player.in_tournament_id === 1 ||
          player.in_tournament_id === 2
        ) {
          nextTeamB.push(player);
        }
        break;
      case 9:
        if (player.in_tournament_id === 0 || player.in_tournament_id === 3) {
          teamA.push(player);
        } else if (
          player.in_tournament_id === 1 ||
          player.in_tournament_id === 2
        ) {
          teamB.push(player);
        }
        break;
      default:
        break;
    }
  });

  const displayTeam = (teamArray: IPlayerFromDB[]) => {
    const team: JSX.Element[] = [];
    for (let i = 0; i < teamArray.length; i++) {
      team.push(
        <div key={teamArray[i].in_tournament_id}>
          <h1>{teamArray[i].name}</h1>
        </div>
      );
    }

    return team;
  };

  return (
    <div className="game">
      {console.log(players)}
      {console.log(gameNumber)}
      <div className="game__score">
        <h1>Display Score</h1>
        {displayTeam(teamA)}
        {displayTeam(teamB)}
        <p>Next:</p>
        {displayTeam(nextTeamA)}
        {displayTeam(nextTeamB)}
      </div>
      <div>
        <button onClick={() => setGameNumber((state) => state + 1)}>
          Next
        </button>
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
