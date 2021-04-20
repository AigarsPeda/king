import React, { useState } from "react";

interface IPlayer {
  playerName: string;
  id: number;
}

const Game: React.FC = () => {
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [players, setPlayers] = useState<IPlayer[]>([]);

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

      // Player to push to array
      let player: IPlayer = {
        playerName: "",
        id: Math.floor(Math.random() * Math.floor(numberOfPlayers))
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
