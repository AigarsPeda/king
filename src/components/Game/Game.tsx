import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/reducers/reducers";
import { IPlayerFromDB } from "../../types";
import Input from "../ui/input/Input";

const Game: React.FC = () => {
  const { players } = useSelector((state: RootStateType) => ({
    players: state.tournaments.playerArray
  }));
  const [gameCount, setGameCount] = useState(1);
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
    switch (gameCount) {
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

  // const generateKey = (pre: string) => {
  //   return `${pre}_${new Date().getTime()}`;
  // };

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

  // TODO: this is how post method should look
  // http://localhost:8000/api/v1/game

  //   {
  //     tournamentId: 1,
  //     gameNumber: 2,
  //     teams: [
  //     {
  //         big_points: 1,
  //         in_tournament_id: 2,
  //         is_winner: true,
  //         name: "elīna",
  //         player_id: 2,
  //         points: 21,
  //         tournament_id: 4,
  //         team_number: 0
  //     },
  //     {
  //         big_points: 1,
  //         in_tournament_id: 0,
  //         is_winner: true,
  //         name: "līva",
  //         player_id: 4,
  //         points: 21,
  //         tournament_id: 4,
  //         team_number: 0
  //     },
  //     {
  //         big_points: 0,
  //         in_tournament_id: 1,
  //         is_winner: false,
  //         name: "aigars",
  //         player_id: 1,
  //         points: 18,
  //         tournament_id: 4,
  //         team_number: 1
  //     },
  //     {
  //         big_points: 0,
  //         in_tournament_id: 1,
  //         is_winner: false,
  //         name: "anna",
  //         player_id: 3,
  //         points: 18,
  //         tournament_id: 4,
  //         team_number: 1
  //     }
  //  ]
  // }

  const finishGame = () => {
    // setGameNumber(gameCount);
    setGameCount((state) => state + 1);

    // TODO: remove magic number 9
    if (gameCount >= 9) {
      setGameCount(1);
    }
  };

  return (
    <div className="game">
      {console.log(teamA)}
      {console.log(teamB)}
      {console.log(gameCount)}
      {console.log(players)}
      <div>
        <div className="game__current">
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
