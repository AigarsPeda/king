import { IUser, IUserStates } from "../../types";
import {
  UserActionTypes,
  SET_USER_DATA,
  CLEAR_USER_DATA,
  SET_USER_STATES
} from "../types/userTypes";

export interface IUserState {
  user: IUser;
  states: IUserStates;
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
  states: {
    stats_id: 0,
    points_overall: 0,
    tournaments_played: 0,
    tournaments_won: 0,
    tournaments_lost: 0,
    tournaments_created: 0,
    user_id: 0
  }
};

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): IUserState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload
      };

    case SET_USER_STATES:
      return {
        ...state,
        states: action.payload
      };

    case CLEAR_USER_DATA:
      return initialState;

    default:
      return state;
  }
};
