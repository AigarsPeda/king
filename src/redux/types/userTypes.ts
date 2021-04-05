import { IUser, IUserStates } from "../../types";

export const SET_USER_DATA = "SET_USER_DATA";
interface ISetUserAction {
  type: typeof SET_USER_DATA;
  payload: IUser;
}

export const SET_USER_DATA_LOADING_SATE = "SET_USER_DATA_LOADING_SATE";
interface ISetUserDataLoadingAction {
  type: typeof SET_USER_DATA_LOADING_SATE;
  payload: boolean;
}

export const SET_USER_STATES = "SET_USER_STATES";
interface ISetUserStatesAction {
  type: typeof SET_USER_STATES;
  payload: IUserStates;
}

export const SET_USER_STATES_LOADING_STATE = "SET_USER_STATES_LOADING_STATE";
interface ISetUserStatesLoadingAction {
  type: typeof SET_USER_STATES_LOADING_STATE;
  payload: boolean;
}

export const CLEAR_USER_DATA = "CLEAR_USER_DATA";
interface IClearUserDataAction {
  type: typeof CLEAR_USER_DATA;
}

export type UserActionTypes =
  | ISetUserAction
  | IClearUserDataAction
  | ISetUserStatesAction
  | ISetUserDataLoadingAction
  | ISetUserStatesLoadingAction;
