import { IProfileSelectedInfo } from "../../types";

// USER TYPES
export const SET_PROFILE_SELECTED_INFO = "SET_PROFILE_SELECTED_INFO";
interface ISetProfileSelectedInfoAction {
  type: typeof SET_PROFILE_SELECTED_INFO;
  payload: IProfileSelectedInfo;
}

// IProfileSelectedInfo
export type UIActionTypes = ISetProfileSelectedInfoAction;
