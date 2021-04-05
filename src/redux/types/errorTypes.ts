export const SET_AUTHENTICATION_ERROR = "SET_AUTHENTICATION_ERROR";
interface ISetAuthenticationErrorAction {
  type: typeof SET_AUTHENTICATION_ERROR;
  payload: string | undefined;
}

export type ErrorActionTypes = ISetAuthenticationErrorAction;
