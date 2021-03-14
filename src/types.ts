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

export type IGame = {
  game_created_on: string;
  game_creator_id: number;
  game_ended_on: null | string;
  game_id: number;
  player_array: IGamePlayer[];
};

export type IGamePlayer = {
  id: string;
  score: string;
  winner: boolean;
  playerName: string;
  gameCreator: boolean;
};
