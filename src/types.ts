export type IToken = string;

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

export type IUserSignUp = {
  name: string;
  surname: string;
  email: string;
  password: string;
  terms: boolean;
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

export type IUserStates = {
  stats_id: number;
  points_overall: number;
  tournaments_played: number;
  tournaments_won: number;
  tournaments_lost: number;
  tournaments_created: number;
  user_id: number;
};

// export type IGame = {
// player_array: [{…}, {…}, {…}, {…}, {…}];
// tournament_created_on: string;
// tournament_creator_id: number;
// tournament_ended_on: null | string;
// tournament_id: number;
// }

export type IProfileSelectedInfo = "dashboard" | "mystats" | "hottips";
