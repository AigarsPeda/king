import { IGame } from "../../types";

// USER TYPES
export const SET_ALL_USER_GAMES = "SET_ALL_USER_GAMES";
interface ISetAllUserGamesAction {
  type: typeof SET_ALL_USER_GAMES;
  payload: IGame[];
}

// export const CLEAR_USER_DATA = "CLEAR_USER_DATA";
// interface IClearUserDataAction {
//   type: typeof CLEAR_USER_DATA;
// }

export type GamesActionTypes = ISetAllUserGamesAction;
// | IGetUserDataAction;
