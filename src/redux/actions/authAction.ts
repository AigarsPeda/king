import jwt_decode from "jwt-decode";
import { ThunkAction } from "redux-thunk";
import { callAPI } from "../../services/callAPI";
import { IDecoder, IUserLogIn, IUserSignUp } from "../../types";
import { RootStateType } from "../reducers/reducers";
import { AuthenticateActionTypes, AUTHENTICATE_USER } from "../types/authTypes";
import {
  ErrorActionTypes,
  SET_AUTHENTICATION_ERROR
} from "../types/errorTypes";
import {
  SET_USER_DATA,
  SET_USER_DATA_LOADING_SATE,
  UserActionTypes
} from "../types/userTypes";
import { getAllTournaments } from "./tournaments";
import { getUserStates } from "./userActions";

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  AuthenticateActionTypes | UserActionTypes | ErrorActionTypes
>;

// const isTokenExpired = (exp: number) => Date.now() >= exp * 1000;

export const signUpUser = (signUpData: IUserSignUp): AppThunk => async (
  dispatch
) => {
  dispatch({
    type: SET_USER_DATA_LOADING_SATE,
    payload: true
  });

  try {
    const response = await callAPI({
      url: "/signup",
      method: "POST",
      data: signUpData
    });

    console.log(response);

    const { token, error }: { token: string; error?: string } = response;

    if (error) {
      dispatch({
        type: SET_AUTHENTICATION_ERROR,
        payload: error
      });

      dispatch({
        type: SET_USER_DATA_LOADING_SATE,
        payload: false
      });
    }

    const decoded = jwt_decode(token) as IDecoder;

    if (token && decoded) {
      dispatch({
        type: SET_AUTHENTICATION_ERROR,
        payload: undefined
      });

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

      // Getting all users games and state to display them in dashboard
      // TODO: add loading state to getAllGames
      // dispatch(getAllTournaments());
      // dispatch(getUserStates());
    }
  } catch (error) {
    // console.log(error);
    dispatch({
      type: SET_USER_DATA_LOADING_SATE,
      payload: false
    });
  }
};

export const logInUser = (loginData: IUserLogIn): AppThunk => async (
  dispatch
) => {
  try {
    dispatch({
      type: SET_USER_DATA_LOADING_SATE,
      payload: true
    });

    const response = await callAPI({
      url: "/login",
      method: "POST",
      data: loginData
    });

    const { token, error }: { token: string; error?: string } = response;

    if (error) {
      dispatch({
        type: SET_AUTHENTICATION_ERROR,
        payload: error
      });

      dispatch({
        type: SET_USER_DATA_LOADING_SATE,
        payload: false
      });
    }

    const decoded = jwt_decode(token) as IDecoder;

    if (token && decoded) {
      dispatch({
        type: SET_AUTHENTICATION_ERROR,
        payload: undefined
      });

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

      // Getting all users games and state to display them in dashboard
      // TODO: add loading state to getAllGames
      // dispatch(getAllTournaments());
      // dispatch(getUserStates());
    }
  } catch (error) {
    dispatch({
      type: SET_USER_DATA_LOADING_SATE,
      payload: false
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
//     dispatch({v
//       type: CLEAR_LOANS_DATA
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
