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

export type TournamentsActionTypes =
  | ISetUserTournamentsAction
  | ISetCurrentTournamentAction
  | ISetTournamentsLoading
  | ISetTournamentPlayersAction;
