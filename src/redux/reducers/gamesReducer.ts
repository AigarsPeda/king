import { IGame } from "../../types";
import { SET_USERS_GAMES, GamesActionTypes } from "../types/gamesTypes";

export interface IGamesState {
  games: IGame[];
}

// Initial State
const initialState: IGamesState = {
  games: []
};

export const gamesReducer = (
  state = initialState,
  action: GamesActionTypes
): IGamesState => {
  switch (action.type) {
    case SET_USERS_GAMES:
      return {
        ...state,
        games: action.payload
      };
    // case UNAUTHENTICATED_USER:
    //   return initialState;

    default:
      return state;
  }
};
