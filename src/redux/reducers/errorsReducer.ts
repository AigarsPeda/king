import {
  ErrorActionTypes,
  SET_AUTHENTICATION_ERROR
} from "../types/errorTypes";

export interface IErrorsState {
  authError: string | undefined;
}

// Initial State
const initialState: IErrorsState = {
  authError: undefined
};

export const errorsReducer = (
  state = initialState,
  action: ErrorActionTypes
): IErrorsState => {
  switch (action.type) {
    case SET_AUTHENTICATION_ERROR:
      return {
        ...state,
        authError: action.payload
      };

    default:
      return state;
  }
};
