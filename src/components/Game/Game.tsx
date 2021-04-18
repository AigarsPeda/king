import React, { useState } from "react";

interface IPlayer {
  playerName: string;
}

const Game: React.FC = () => {
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [players, setPlayers] = useState<IPlayer[]>([]);

  // Select input determents how many players will be
  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = parseInt(event.currentTarget.value, 10);
    // TODO: do i need this state
    setPlayerCount(value);

    // TODO: fix variable names
    const x = { playerName: "" };
    const array: IPlayer[] = [];

    for (let i = 0; i < value; i++) {
      array.push(x);
    }

    setPlayers(array);
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
          // name={`playerName${[i]}`}
          name="playerName"
          value={players[i].playerName}
        />
      );
      console.log(`playerName${[i]}`);
    }
    return inputsArray;
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
      {createInputs()}
    </div>
  );
};

export default Game;
