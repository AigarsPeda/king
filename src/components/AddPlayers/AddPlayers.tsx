import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stringifyNumber } from "../../helpers/stringifyNumber";
import { createTournaments } from "../../redux/actions/tournaments";
import { RootStateType } from "../../redux/reducers/reducers";
import { IPlayer, ICreateTournament } from "../../types";
import Input from "../ui/input/Input";

const AddPlayers: React.FC = () => {
  const dispatch = useDispatch();
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [checkbox, setChecked] = useState(false);

  const { user, loadingTournament } = useSelector((state: RootStateType) => ({
    user: state.user.user,
    loadingTournament: state.tournaments.loadingTournament
  }));

  // handleChange from select input determents
  // how many players will be pushed to
  // player array with unique id
  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const numberOfPlayers = parseInt(event.currentTarget.value, 10);

    const playerArray: IPlayer[] = [];

    for (let i = 0; i < numberOfPlayers; i++) {
      const arrayOfId = playerArray.map((player) => player.inTournamentId);

      // Player for pushing to array
      let player: IPlayer = {
        playerName: "",
        inTournamentId: Math.floor(Math.random() * Math.floor(numberOfPlayers))
      };

      // Changing player id until is unique
      do {
        player = {
          ...player,
          inTournamentId: Math.floor(
            Math.random() * Math.floor(numberOfPlayers)
          )
        };
      } while (arrayOfId.includes(player.inTournamentId));

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
        <Input
          key={i}
          type={"text"}
          handleChange={(event) => handleInputChange(event, i)}
          name={`playerName`}
          value={players[i].playerName}
          label={`${stringifyNumber(i + 1)} player name`}
        />
      );
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
        playerName: user.name
      };
    } else {
      firstPlayer = {
        ...firstPlayer,
        playerName: ""
      };
    }

    // Insert player in array
    // 0 = index of player
    // 1 = how many
    // firstPlayer with what to replace
    players.splice(0, 1, firstPlayer);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: ICreateTournament = {
      id: user.user_id,
      playerArray: players
    };

    dispatch(createTournaments(data));
  };

  return (
    <div className="add-players">
      <div className="add-players__select">
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
      {createInputs().length ? <hr /> : null}
      <div className="add-players__form">
        {createInputs().length ? (
          <form
            onSubmit={handleSubmit}
            className={`${createInputs().length && "modal-open"}`}
          >
            <div className="add-players__form-checkbox ">
              <h3>
                Are you{" "}
                <span className="add-players__form-text-color">
                  {user.name}
                </span>{" "}
                playing?
              </h3>
              <input
                type="checkbox"
                defaultChecked={checkbox}
                onChange={handleCheckboxChange}
              />
            </div>
            {createInputs()}
            <div className="add-players__form-location"></div>
            <button
              type="submit"
              disabled={loadingTournament}
              className={`${loadingTournament && "loading"}`}
            >
              {!loadingTournament && "Start Tournament"}
            </button>
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default AddPlayers;
