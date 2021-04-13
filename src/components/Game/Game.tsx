import React, { useState } from "react";

const Game: React.FC = () => {
  const [playerCount, setPlayerCount] = useState<number>(0);

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = parseInt(event.currentTarget.value, 10);
    setPlayerCount(value);
    console.log(value);
  };

  return (
    <div>
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
    </div>
  );
};

export default Game;
