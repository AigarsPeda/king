import React from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/reducers/reducers";
import AddPlayers from "../AddPlayers/AddPlayers";
import Game from "../Game/Game";

const Tournament: React.FC = () => {
  const { currentTournament } = useSelector((state: RootStateType) => ({
    currentTournament: state.tournaments.currentTournament
  }));

  return <div>{currentTournament ? <Game /> : <AddPlayers />}</div>;
};

export default Tournament;
