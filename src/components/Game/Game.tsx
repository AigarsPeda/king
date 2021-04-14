import React, { useState } from "react";

const Game: React.FC = () => {
  const [playerCount, setPlayerCount] = useState<number>(0);

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = parseInt(event.currentTarget.value, 10);
    setPlayerCount(value);
    console.log(value);
  };

  const inputsCountArray = new Array(4);

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

      {inputsCountArray.map((_, index) => {
        return (
          <div key={index}>
            <label htmlFor="player name">Player Name</label>
            <input type="text" />
          </div>
        );
      })}
    </div>
  );
};

export default Game;
