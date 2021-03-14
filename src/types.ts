export type IUserAuth = {
  user: IUser;
  token: IToken;
  error?: string;
};

export type IDecoder = {
  iat: number;
  user: IUser;
};

export type IUser = {
  user_id: number;
  name: string;
  surname: string;
  email: string;
  created_on: string;
};

export type IToken = string;

export type IUserSignUp = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export type IUserLogIn = {
  email: string;
  password: string;
};
