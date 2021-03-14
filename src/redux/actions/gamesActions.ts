import { ThunkAction } from "redux-thunk";
import { callAPI } from "../../services/callAPI";
import { IGame } from "../../types";
import { RootStateType } from "../reducers/reducers";
import { GamesActionTypes } from "../types/gameTypes";

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

  console.log("response: ", response);
};
