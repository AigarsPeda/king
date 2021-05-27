import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveGame, setGameNumber } from "../../redux/actions/tournaments";
import { RootStateType } from "../../redux/reducers/reducers";
import { IPlayerFromDB } from "../../types";
import Input from "../ui/input/Input";

const Game: React.FC = () => {
  const dispatch = useDispatch();
  const { players, tournamentId, gameNumber } = useSelector(
    (state: RootStateType) => ({
      players: state.tournaments.playerArray,
      tournamentId: state.tournaments.currentTournament?.tournament_id,
      gameNumber: state.tournaments.gameNumber
    })
  );
  // const [gameCount, setGameCount] = useState(1);
  const [teamScore, setTeamScore] = useState({
    teamAScore: "",
    teamBScore: ""
  });

  /* Current Game **/
  const teamA: IPlayerFromDB[] = [];
  const teamB: IPlayerFromDB[] = [];

  /* Next Game **/
  const nextTeamA: IPlayerFromDB[] = [];
  const nextTeamB: IPlayerFromDB[] = [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeamScore((state) => ({
      ...state,
      [name]: value
    }));
  };

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
        if (compareValues([0, 2], player.in_tournament_id)) {
          teamA.push(player);
        } else if (compareValues([1, 3], player.in_tournament_id)) {
          teamB.push(player);
        }

        /* Creating Next Teams **/
        if (compareValues([0, 3], player.in_tournament_id)) {
          nextTeamA.push(player);
        } else if (compareValues([1, 2], player.in_tournament_id)) {
          nextTeamB.push(player);
        }

        break;
      case 3:
        if (compareValues([0, 3], player.in_tournament_id)) {
          teamA.push(player);
        } else if (compareValues([1, 2], player.in_tournament_id)) {
          teamB.push(player);
        }

        /* Creating Next Teams **/
        if (compareValues([0, 1], player.in_tournament_id)) {
          nextTeamA.push(player);
        } else if (compareValues([2, 3], player.in_tournament_id)) {
          nextTeamB.push(player);
        }

        break;
      case 4:
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
      case 5:
        if (compareValues([0, 2], player.in_tournament_id)) {
          teamA.push(player);
        } else if (compareValues([1, 3], player.in_tournament_id)) {
          teamB.push(player);
        }

        /* Creating Next Teams **/
        if (compareValues([0, 3], player.in_tournament_id)) {
          nextTeamA.push(player);
        } else if (compareValues([1, 2], player.in_tournament_id)) {
          nextTeamB.push(player);
        }
        break;
      case 6:
        if (compareValues([0, 3], player.in_tournament_id)) {
          teamA.push(player);
        } else if (compareValues([1, 2], player.in_tournament_id)) {
          teamB.push(player);
        }

        /* Creating Next Teams **/
        if (compareValues([0, 1], player.in_tournament_id)) {
          nextTeamA.push(player);
        } else if (compareValues([2, 3], player.in_tournament_id)) {
          nextTeamB.push(player);
        }
        break;
      case 7:
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
      case 8:
        if (compareValues([0, 2], player.in_tournament_id)) {
          teamA.push(player);
        } else if (compareValues([1, 3], player.in_tournament_id)) {
          teamB.push(player);
        }

        /* Creating Next Teams **/
        if (compareValues([0, 3], player.in_tournament_id)) {
          nextTeamA.push(player);
        } else if (compareValues([1, 2], player.in_tournament_id)) {
          nextTeamB.push(player);
        }
        break;
      case 9:
        if (compareValues([0, 3], player.in_tournament_id)) {
          teamA.push(player);
        } else if (compareValues([1, 2], player.in_tournament_id)) {
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
        <h1
          className="game__current__teams-player"
          key={teamArray[i].in_tournament_id}
        >
          {teamArray[i].name}
        </h1>
      );
    }

    return team;
  };

  const finishGame = () => {
    const [playerOneATeam, playerTwoATeam] = teamA;
    const [playerOneBTeam, playerTwoBTeam] = teamB;

    let newPlayerArray: IPlayerFromDB[] = [];

    if (!tournamentId) {
      return;
    }

    // TODO: simplify this
    if (parseInt(teamScore.teamAScore) > parseInt(teamScore.teamBScore)) {
      console.log("Team A won!");

      newPlayerArray = players.map((player) => {
        if (
          player.in_tournament_id === playerOneATeam.in_tournament_id ||
          player.in_tournament_id === playerTwoATeam.in_tournament_id
        ) {
          /* This team won **/
          return {
            ...player,
            big_points: player.big_points + 1,
            is_winner: true,
            team_number: 1,
            points: player.points + parseInt(teamScore.teamAScore)
          };
        } else if (
          player.in_tournament_id === playerOneBTeam.in_tournament_id ||
          player.in_tournament_id === playerTwoBTeam.in_tournament_id
        ) {
          /* This team lost **/
          return {
            ...player,
            team_number: 0,
            points: player.points + parseInt(teamScore.teamBScore)
          };
        } else {
          /* This player wasn't playing **/
          return {
            ...player,
            team_number: 3
          };
        }
      });
    }

    if (parseInt(teamScore.teamAScore) < parseInt(teamScore.teamBScore)) {
      console.log("Team B won!");

      newPlayerArray = players.map((player) => {
        if (
          player.in_tournament_id === playerOneBTeam.in_tournament_id ||
          player.in_tournament_id === playerTwoBTeam.in_tournament_id
        ) {
          /* This team won **/
          return {
            ...player,
            big_points: player.big_points + 1,
            is_winner: true,
            team_number: 1,
            points: player.points + parseInt(teamScore.teamBScore)
          };
        } else if (
          player.in_tournament_id === playerOneATeam.in_tournament_id ||
          player.in_tournament_id === playerTwoATeam.in_tournament_id
        ) {
          /* This team lost **/
          return {
            ...player,
            team_number: 0,
            points: player.points + parseInt(teamScore.teamAScore)
          };
        } else {
          /* This player wasn't playing **/
          return {
            ...player,
            team_number: 3
          };
        }
      });
    }

    const gameData = {
      tournament_id: tournamentId,
      game_number: gameNumber,
      teams: newPlayerArray
    };

    dispatch(saveGame(gameData));
    dispatch(setGameNumber(gameNumber + 1));

    // TODO: remove magic number 9
    if (gameNumber >= 9) {
      dispatch(setGameNumber(1));
    }
  };

  return (
    <div className="game">
      <div>
        <div className="game__current">
          {console.log("gameNumber: ", gameNumber)}
          {console.log("teamA: ", teamA)}
          {console.log("teamB: ", teamB)}
          <div className="game__current__teams">{displayTeam(teamA)}</div>
          <div className="game__current-score">
            <Input
              value={teamScore.teamAScore}
              type={"text"}
              name={"teamAScore"}
              label={"Enter Score"}
              handleChange={handleChange}
            />
            <p>:</p>
            <Input
              value={teamScore.teamBScore}
              type={"text"}
              name={"teamBScore"}
              label={"Enter Score"}
              handleChange={handleChange}
            />
          </div>
          <div className="game__current__teams">{displayTeam(teamB)}</div>
        </div>
        <p>Next Game:</p>
        {displayTeam(nextTeamA)}
        {displayTeam(nextTeamB)}
      </div>
      <div>
        <button onClick={finishGame}>Next</button>
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
            {players.map((player, index) => {
              return (
                <tr key={index}>
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
