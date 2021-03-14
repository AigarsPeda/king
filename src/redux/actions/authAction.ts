import jwt_decode from "jwt-decode";
import { ThunkAction } from "redux-thunk";
import { isToken } from "../../helpers/isToken";
import { callAPI } from "../../services/callAPI";
import { IDecoder, IUserAuth, IUserLogIn, IUserSignUp } from "../../types";
import { RootStateType } from "../reducers/reducers";
import { AuthenticateActionTypes, AUTHENTICATE_USER } from "../types/authTypes";
import { SET_USER_DATA, UserActionTypes } from "../types/userTypes";

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  AuthenticateActionTypes | UserActionTypes
>;

// create new user
export const signUpUser = (signUpData: IUserSignUp): AppThunk => async (
  dispatch
) => {
  try {
    const response = await callAPI({
      url: "/signup",
      method: "POST",
      data: signUpData
    });
    const { token }: { token: string } = response;
    const decoded = jwt_decode(token) as IDecoder;

    console.log("decoded: ", decoded);

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
  } catch (error) {
    console.log(error);
  }
};

// login user
export const logInUser = (loginData: IUserLogIn): AppThunk => async (
  dispatch
) => {
  try {
    const response = await callAPI({
      url: "/login",
      method: "POST",
      data: loginData
    });

    const { token, user }: IUserAuth = response;

    // TODO: before setting cookie check it

    // Saving token in cookie
    // eslint-disable-next-line functional/immutable-data
    document.cookie = `access_token=${token}`;

    dispatch({
      type: AUTHENTICATE_USER,
      payload: isToken(token)
    });
    // dispatch({
    //   type: SET_USER_DATA,
    //   payload: user
    // });
  } catch (error) {
    console.log(error);
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
