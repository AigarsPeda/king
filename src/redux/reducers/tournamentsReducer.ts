import { IPlayerFromDB, ITournament } from "../../types";
import {
  SET_CURRENT_TOURNAMENT,
  SET_TOURNAMENTS_GAME_NUMBER,
  SET_TOURNAMENTS_LOADING_SATE,
  SET_TOURNAMENT_PLAYERS,
  SET_USERS_TOURNAMENTS,
  TournamentsActionTypes
} from "../types/tournamentsTypes";

export interface ITournamentsState {
  tournaments: ITournament[];
  currentTournament: ITournament | undefined;
  loadingTournament: boolean;
  playerArray: IPlayerFromDB[];
  gameNumber: number;
}

// Initial State
const initialState: ITournamentsState = {
  tournaments: [],
  currentTournament: undefined,
  loadingTournament: false,
  playerArray: [],
  gameNumber: 1
};

export const tournamentsReducer = (
  state = initialState,
  action: TournamentsActionTypes
): ITournamentsState => {
  switch (action.type) {
    case SET_USERS_TOURNAMENTS:
      return {
        ...state,
        tournaments: action.payload,
        loadingTournament: false
      };

    case SET_CURRENT_TOURNAMENT:
      return {
        ...state,
        currentTournament: action.payload,
        loadingTournament: false
      };

    case SET_TOURNAMENT_PLAYERS:
      return {
        ...state,
        playerArray: action.payload,
        loadingTournament: false
      };

    case SET_TOURNAMENTS_LOADING_SATE:
      return {
        ...state,
        loadingTournament: action.payload
      };

    case SET_TOURNAMENTS_GAME_NUMBER:
      return {
        ...state,
        gameNumber: action.payload
      };

    default:
      return state;
  }
};
