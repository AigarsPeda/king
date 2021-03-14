import { IUser } from "../../types";
import {
  UserActionTypes,
  SET_USER_DATA,
  CLEAR_USER_DATA
} from "../types/userTypes";

export interface IUserState {
  user: IUser;
}

// Initial State
const initialState: IUserState = {
  user: {
    created_on: "",
    email: "",
    name: "",
    surname: "",
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

    case CLEAR_USER_DATA:
      return initialState;

    default:
      return state;
  }
};
