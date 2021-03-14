import {
  AuthenticateActionTypes,
  AUTHENTICATE_USER,
  UNAUTHENTICATED_USER
} from "../types/authTypes";

export interface IAuthState {
  isAuthenticated: boolean;
}

// Initial State
const initialState: IAuthState = {
  isAuthenticated: false
};

export const authReducer = (
  state = initialState,
  action: AuthenticateActionTypes
): IAuthState => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: action.payload
      };
    case UNAUTHENTICATED_USER:
      return initialState;

    default:
      return state;
  }
};
