import React, { useState } from "react";

const Game: React.FC = () => {
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [players, setPlayers] = useState({
    playerName: ""
  });

  // "playerArray": [
  //   {
  //       "playerName": "Aigars",
  //       "gameCreator": true,
  //       "winner": true,
  //       "score": "21",
  //       "id": "1"
  //   },
  //   {
  //       "playerName": "Oskars",
  //       "gameCreator": false,
  //       "winner": false,
  //       "score": "18",
  //       "id": "2"
  //   }
  // ]

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = parseInt(event.currentTarget.value, 10);
    setPlayerCount(value);
    console.log(value);
  };

  const createInputs = () => {
    const inputsArray: JSX.Element[] = [];
    for (let i = 0; i < playerCount; i++) {
      inputsArray.push(<input className="game-input" key={i}></input>);
    }
    return inputsArray;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPlayers((state) => ({
      ...state,
      [name]: value
    }));
  };

  return (
    <div className="game">
      <label htmlFor="player count">Select player count:</label>

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
