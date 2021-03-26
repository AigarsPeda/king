import { IUser, IUserStates } from "../../types";
import {
  CLEAR_USER_DATA,
  SET_USER_DATA,
  SET_USER_DATA_LOADING,
  SET_USER_DATA_NOT_LOADING,
  SET_USER_STATES,
  SET_USER_STATES_LOADING,
  SET_USER_STATES_NOT_LOADING,
  UserActionTypes
} from "../types/userTypes";

export interface IUserState {
  user: IUser;
  isUserDataLoading: boolean;
  states: IUserStates;
  isUserStatesLoading: boolean;
}

// Initial State
const initialState: IUserState = {
  user: {
    created_on: "",
    email: "",
    name: "",
    surname: "",
    user_id: 0
  },
  isUserDataLoading: false,
  states: {
    stats_id: 0,
    points_overall: 0,
    tournaments_played: 0,
    tournaments_won: 0,
    tournaments_lost: 0,
    tournaments_created: 0,
    user_id: 0
  },
  isUserStatesLoading: false
};

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): IUserState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
        isUserDataLoading: false
      };

    case SET_USER_DATA_LOADING:
      return {
        ...state,
        isUserDataLoading: true
      };

    case SET_USER_DATA_NOT_LOADING:
      return {
        ...state,
        isUserDataLoading: false
      };

    case SET_USER_STATES:
      return {
        ...state,
        states: action.payload,
        isUserStatesLoading: false
      };

    case SET_USER_STATES_LOADING:
      return {
        ...state,
        isUserStatesLoading: true
      };

    case SET_USER_STATES_NOT_LOADING:
      return {
        ...state,
        isUserStatesLoading: false
      };

    case CLEAR_USER_DATA:
      return initialState;

    default:
      return state;
  }
};
