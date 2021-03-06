import { ThunkAction } from "redux-thunk";
import { IProfileSelectedInfo } from "../../types";
import { RootStateType } from "../reducers/reducers";
import { SET_PROFILE_SELECTED_INFO, UIActionTypes } from "../types/uiTypes";

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  UIActionTypes
>;

export const setProfileSelectedInfo = (
  selectedInfoComponent: IProfileSelectedInfo
): AppThunk => async (dispatch) => {
  try {
    dispatch({
      type: SET_PROFILE_SELECTED_INFO,
      payload: selectedInfoComponent
    });
  } catch (error) {
    console.log(error);
  }
};
