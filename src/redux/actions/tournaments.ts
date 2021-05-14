import { ThunkAction } from "redux-thunk";
import { callAPI } from "../../services/callAPI";
import { ICreateTournament, IPlayerFromDB, ITournament } from "../../types";
import { RootStateType } from "../reducers/reducers";
import {
  SET_CURRENT_TOURNAMENT,
  SET_TOURNAMENTS_GAME_NUMBER,
  SET_TOURNAMENTS_LOADING_SATE,
  SET_TOURNAMENT_PLAYERS,
  SET_USERS_TOURNAMENTS,
  TournamentsActionTypes
} from "../types/tournamentsTypes";

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  TournamentsActionTypes
>;

type ICreateTournamentResponse = {
  tournament: ITournament;
  playerArrayFromDB: IPlayerFromDB[];
};

export const createTournaments = (data: ICreateTournament): AppThunk => async (
  dispatch
) => {
  dispatch({
    type: SET_TOURNAMENTS_LOADING_SATE,
    payload: true
  });

  const response: ICreateTournamentResponse = await callAPI({
    url: "/tournament/create",
    method: "POST",
    data: data
  });

  console.log(response);

  dispatch({
    type: SET_CURRENT_TOURNAMENT,
    payload: response.tournament
  });

  dispatch({
    type: SET_TOURNAMENT_PLAYERS,
    payload: response.playerArrayFromDB
  });
};

export const getAllTournaments = (): AppThunk => async (dispatch) => {
  dispatch({
    type: SET_TOURNAMENTS_LOADING_SATE,
    payload: true
  });

  const response: ITournament[] = await callAPI({
    url: "/tournaments",
    method: "GET"
  });

  dispatch({
    type: SET_USERS_TOURNAMENTS,
    payload: response
  });
};

// export const setGameNumber = (gameNumber: number): AppThunk => async (
//   dispatch
// ) => {
//   dispatch({
//     type: SET_TOURNAMENTS_GAME_NUMBER,
//     payload: gameNumber
//   });
// };
