import { IProfileSelectedInfo } from "../../types";
import { UIActionTypes, SET_PROFILE_SELECTED_INFO } from "../types/uiTypes";

export interface IAuthState {
  selectedInfo: IProfileSelectedInfo;
}

// Initial State
const initialState: IAuthState = {
  selectedInfo: "mystats"
};

export const UIReducer = (
  state = initialState,
  action: UIActionTypes
): IAuthState => {
  switch (action.type) {
    case SET_PROFILE_SELECTED_INFO:
      return {
        ...state,
        selectedInfo: action.payload
      };
    // case UNAUTHENTICATED_USER:
    //   return initialState;

    default:
      return state;
  }
};
