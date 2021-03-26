import { ThunkAction } from "redux-thunk";
import { callAPI } from "../../services/callAPI";

import { IUser, IUserStates } from "../../types";
import { RootStateType } from "../reducers/reducers";
import {
  SET_USER_DATA,
  SET_USER_STATES,
  UserActionTypes
} from "../types/userTypes";

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  UserActionTypes
>;

export const getUser = (): AppThunk => async (dispatch) => {
  try {
    // in callAPI if there are token in cookie
    // it is added to AUTHORIZATION headers
    const response: IUser = await callAPI({
      url: "/user",
      method: "GET"
    });

    dispatch({
      type: SET_USER_DATA,
      payload: response
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserStates = (): AppThunk => async (dispatch) => {
  try {
    // in callAPI if there are token in cookie
    // it is added to AUTHORIZATION headers
    const response: IUserStates = await callAPI({
      url: "/user/stats",
      method: "GET"
    });

    dispatch({
      type: SET_USER_STATES,
      payload: response
    });
  } catch (error) {
    console.log(error);
  }
};
