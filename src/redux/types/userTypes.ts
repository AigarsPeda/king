import { IUser, IUserStates } from "../../types";

// USER TYPES
export const SET_USER_DATA = "SET_USER_DATA";
interface ISetUserAction {
  type: typeof SET_USER_DATA;
  payload: IUser;
}

export const SET_USER_DATA_LOADING = "SET_USER_DATA_LOADING";
interface ISetUserDataLoadingAction {
  type: typeof SET_USER_DATA_LOADING;
  // payload: boolean;
}

export const SET_USER_DATA_NOT_LOADING = "SET_USER_DATA_NOT_LOADING";
interface ISetUserDataNotLoadingAction {
  type: typeof SET_USER_DATA_NOT_LOADING;
  // payload: boolean;
}

export const SET_USER_STATES = "SET_USER_STATES";
interface ISetUserStatesAction {
  type: typeof SET_USER_STATES;
  payload: IUserStates;
}

export const SET_USER_STATES_LOADING = "SET_USER_STATES_LOADING";
interface ISetUserStatesLoadingAction {
  type: typeof SET_USER_STATES_LOADING;
  // payload: boolean;
}

export const SET_USER_STATES_NOT_LOADING = "SET_USER_STATES_NOT_LOADING";
interface ISetUserStatesNotLoadingAction {
  type: typeof SET_USER_STATES_NOT_LOADING;
  // payload: boolean;
}

// export const GET_USER_DATA = "GET_USER_DATA";
// interface IGetUserDataAction {
//   type: typeof GET_USER_DATA;
//   payload: IUser;
// }

export const CLEAR_USER_DATA = "CLEAR_USER_DATA";
interface IClearUserDataAction {
  type: typeof CLEAR_USER_DATA;
}

export type UserActionTypes =
  | ISetUserAction
  | IClearUserDataAction
  | ISetUserStatesAction
  | ISetUserDataLoadingAction
  | ISetUserStatesLoadingAction
  | ISetUserDataNotLoadingAction
  | ISetUserStatesNotLoadingAction;
