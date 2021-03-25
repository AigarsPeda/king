import { IGame } from "../../types";

export const SET_USERS_GAMES = "SET_USERS_GAMES";
interface ISetUserGamesAction {
  type: typeof SET_USERS_GAMES;
  payload: IGame[];
}

export type GamesActionTypes = ISetUserGamesAction;
