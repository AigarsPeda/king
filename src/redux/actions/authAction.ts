import jwt_decode from "jwt-decode";
import { ThunkAction } from "redux-thunk";
import { callAPI } from "../../services/callAPI";
import { IDecoder, IUserLogIn, IUserSignUp } from "../../types";
import { RootStateType } from "../reducers/reducers";
import { AuthenticateActionTypes, AUTHENTICATE_USER } from "../types/authTypes";
import {
  SET_USER_DATA,
  SET_USER_DATA_LOADING,
  SET_USER_DATA_NOT_LOADING,
  UserActionTypes
} from "../types/userTypes";
import { getAllGames } from "./gamesActions";

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  AuthenticateActionTypes | UserActionTypes
>;

// const isTokenExpired = (exp: number) => Date.now() >= exp * 1000;

export const signUpUser = (signUpData: IUserSignUp): AppThunk => async (
  dispatch
) => {
  dispatch({
    type: SET_USER_DATA_LOADING
  });

  try {
    const response = await callAPI({
      url: "/signup",
      method: "POST",
      data: signUpData
    });

    console.log("response: ", response);

    const { token, error }: { token: string; error?: string } = response;
    const decoded = jwt_decode(token) as IDecoder;

    // TODO: do something with error
    if (error) {
      return console.log("Signup error: ", error);
    }

    if (token) {
      dispatch({
        type: AUTHENTICATE_USER,
        payload: true
      });

      dispatch({
        type: SET_USER_DATA,
        payload: decoded.user
      });

      // eslint-disable-next-line functional/immutable-data
      document.cookie = `access_token=Bearer ${token}`;

      // getting all users games to display them in dashboard
      // after sign up
      dispatch(getAllGames());
    }
  } catch (error) {
    console.log(error);
  }
};

export const logInUser = (loginData: IUserLogIn): AppThunk => async (
  dispatch
) => {
  try {
    dispatch({
      type: SET_USER_DATA_LOADING
    });

    const response = await callAPI({
      url: "/login",
      method: "POST",
      data: loginData
    });

    const { token, error }: { token: string; error?: string } = response;
    const decoded = jwt_decode(token) as IDecoder;

    // TODO: do something with error
    if (error) {
      return console.log("Login error: ", error);
    }

    if (token) {
      dispatch({
        type: AUTHENTICATE_USER,
        payload: true
      });

      dispatch({
        type: SET_USER_DATA,
        payload: decoded.user
      });

      // eslint-disable-next-line functional/immutable-data
      document.cookie = `access_token=Bearer ${token}`;

      // getting all users games to display them in dashboard
      // after log up
      dispatch(getAllGames());
    }
  } catch (error) {
    console.log(error);

    dispatch({
      type: SET_USER_DATA_NOT_LOADING
    });
  }
};

// export const logOutUser = (): AppThunk => async (dispatch) => {
//   try {
//     dispatch({
//       type: UNAUTHENTICATED_USER
//     });
//     dispatch({
//       type: CLEAR_CARDS_DATA
//     });
//     dispatch({
//       type: CLEAR_ERROR
//     });
//     dispatch({
//       type: CLEAR_TRANSACTION
//     });
//     dispatch({
//       type: CLEAR_USER_DATA
//     });
//     dispatch({
//       type: CLEAR_LOANS_DATA
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
