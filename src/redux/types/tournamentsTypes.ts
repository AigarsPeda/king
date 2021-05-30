import { IPlayerFromDB, ITournament } from "../../types";

export const SET_USERS_TOURNAMENTS = "SET_USERS_TOURNAMENTS";
interface ISetUserTournamentsAction {
  type: typeof SET_USERS_TOURNAMENTS;
  payload: ITournament[];
}

export const SET_CURRENT_TOURNAMENT = "SET_CURRENT_TOURNAMENT";
interface ISetCurrentTournamentAction {
  type: typeof SET_CURRENT_TOURNAMENT;
  payload: ITournament;
}

export const SET_TOURNAMENT_PLAYERS = "SET_TOURNAMENT_PLAYERS";
interface ISetTournamentPlayersAction {
  type: typeof SET_TOURNAMENT_PLAYERS;
  payload: IPlayerFromDB[];
}

export const SET_TOURNAMENTS_LOADING_SATE = "SET_TOURNAMENTS_LOADING_SATE";
interface ISetTournamentsLoading {
  type: typeof SET_TOURNAMENTS_LOADING_SATE;
  payload: boolean;
}

export const SET_TOURNAMENTS_GAME_NUMBER = "SET_TOURNAMENTS_GAME_NUMBER";
interface ISetTournamentsGameNumber {
  type: typeof SET_TOURNAMENTS_GAME_NUMBER;
  payload: number;
}

export const SET_NEW_PLAYERS = "SET_NEW_PLAYERS";
interface ISetNewPlayersArrayAction {
  type: typeof SET_NEW_PLAYERS;
  payload: IPlayerFromDB[];
}

export type TournamentsActionTypes =
  | ISetUserTournamentsAction
  | ISetCurrentTournamentAction
  | ISetTournamentsLoading
  | ISetTournamentPlayersAction
  | ISetTournamentsGameNumber
  | ISetNewPlayersArrayAction;
