import { ThunkAction } from "redux-thunk";
import { callAPI } from "../../services/callAPI";
import { IGame } from "../../types";
import { RootStateType } from "../reducers/reducers";
import { GamesActionTypes } from "../types/gamesTypes";

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  GamesActionTypes
>;

export const getAllGames = (): AppThunk => async (dispatch) => {
  const response: IGame[] = await callAPI({
    url: "/games",
    method: "GET"
  });

  dispatch({
    type: "SET_USERS_GAMES",
    payload: response
  });
};
