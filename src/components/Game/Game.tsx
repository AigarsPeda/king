import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/reducers/reducers";

interface IPlayer {
  playerName: string;
  id: number;
  gameCreator: boolean;
  winner: boolean;
  score: string;
}

const Game: React.FC = () => {
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [checkbox, setChecked] = useState(false);

  const { user } = useSelector((state: RootStateType) => ({
    user: state.user.user
  }));

  // handleChange from select input determents
  // how many players will be pushed to
  // player array with unique id
  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const numberOfPlayers = parseInt(event.currentTarget.value, 10);
    // TODO: do i need this state
    setPlayerCount(numberOfPlayers);

    const playerArray: IPlayer[] = [];

    for (let i = 0; i < numberOfPlayers; i++) {
      const arrayOfId = playerArray.map((player) => player.id);

      // Player for pushing to array
      let player: IPlayer = {
        playerName: "",
        id: Math.floor(Math.random() * Math.floor(numberOfPlayers)),
        gameCreator: false,
        winner: false,
        score: "0"
      };

      // Changing player id until is unique
      do {
        player = {
          ...player,
          id: Math.floor(Math.random() * Math.floor(numberOfPlayers))
        };
      } while (arrayOfId.includes(player.id));

      // Pushing player with unique id to array
      playerArray.push(player);
    }

    setPlayers(playerArray);
  };

  // Find and update player name in state
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const { name, value } = e.target;

    const updatePlayersArray = players.map((player, index) => {
      if (index === i) {
        return {
          ...player,
          [name]: value
        };
      }
      return player;
    });

    setPlayers(updatePlayersArray);
  };

  // Create inputs depending on selected player count
  const createInputs = () => {
    const inputsArray: JSX.Element[] = [];
    for (let i = 0; i < players.length; i++) {
      inputsArray.push(
        <input
          className="game-input"
          key={i}
          onChange={(event) => handleInputChange(event, i)}
          name={`player-${[i]}`}
          value={players[i].playerName}
        />
      );
      console.log(`playerName${[i]}`);
    }
    return inputsArray;
  };

  // Account owner is playing add his info to array
  // off players
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;

    setChecked(checked);

    let firstPlayer = players[0];

    if (checked) {
      firstPlayer = {
        ...firstPlayer,
        playerName: user.name,
        gameCreator: true
      };
    } else {
      firstPlayer = {
        ...firstPlayer,
        playerName: "",
        gameCreator: false
      };
    }

    // Insert player in array
    // 0 = index of player
    // 1 = how many
    // firstPlayer with what to replace
    players.splice(0, 1, firstPlayer);
  };

  return (
    <div className="game">
      <label htmlFor="player count">Select player count:</label>
      {console.log("players: ", players)}
      <select
        name="player count"
        defaultValue={"DEFAULT"}
        onBlur={handleChange}
        onChange={handleChange}
      >
        <option value="DEFAULT" disabled>
          ...
        </option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <div></div>
      {createInputs().length ? (
        <div>
          <h3>Are you {user.name} playing?</h3>
          {console.log("checkbox: ", checkbox)}
          <input
            type="checkbox"
            defaultChecked={checkbox}
            onChange={handleCheckboxChange}
          />
        </div>
      ) : (
        ""
      )}
      <div className="game__inputs">{createInputs()}</div>
    </div>
  );
};

export default Game;
