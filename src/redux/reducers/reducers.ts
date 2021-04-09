import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./authReducer";
import { errorsReducer } from "./errorsReducer";
import { gamesReducer } from "./gamesReducer";
import { UIReducer } from "./uiReducer";
import { userReducer } from "./userReducer";

// COMBINED REDUCERS
const reducers = {
  games: gamesReducer,
  errors: errorsReducer,
  auth: authReducer,
  user: userReducer,
  ui: UIReducer
};

const appReducers = combineReducers(reducers);

const persistConfig = {
  key: "primary",
  storage,
  whitelist: ["auth", "user", "ui"] // place to select which state you want to persist
};

export type RootStateType = ReturnType<typeof appReducers>;
const persistedReducer = persistReducer(persistConfig, appReducers);

export default persistedReducer;
