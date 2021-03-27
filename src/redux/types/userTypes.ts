import { IUser, IUserStates } from "../../types";

export const SET_USER_DATA = "SET_USER_DATA";
interface ISetUserAction {
  type: typeof SET_USER_DATA;
  payload: IUser;
}

export const SET_USER_DATA_LOADING = "SET_USER_DATA_LOADING";
interface ISetUserDataLoadingAction {
  type: typeof SET_USER_DATA_LOADING;
}

export const SET_USER_DATA_NOT_LOADING = "SET_USER_DATA_NOT_LOADING";
interface ISetUserDataNotLoadingAction {
  type: typeof SET_USER_DATA_NOT_LOADING;
}

export const SET_USER_STATES = "SET_USER_STATES";
interface ISetUserStatesAction {
  type: typeof SET_USER_STATES;
  payload: IUserStates;
}

export const SET_USER_STATES_LOADING = "SET_USER_STATES_LOADING";
interface ISetUserStatesLoadingAction {
  type: typeof SET_USER_STATES_LOADING;
}

export const SET_USER_STATES_NOT_LOADING = "SET_USER_STATES_NOT_LOADING";
interface ISetUserStatesNotLoadingAction {
  type: typeof SET_USER_STATES_NOT_LOADING;
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
  | ISetUserStatesLoadingAction
  | ISetUserDataNotLoadingAction
  | ISetUserStatesNotLoadingAction;
