import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";

// COMBINED REDUCERS
const reducers = {
  auth: authReducer,
  user: userReducer
};

const appReducers = combineReducers(reducers);

const persistConfig = {
  key: "primary",
  storage,
  whitelist: ["auth", "user"] // place to select which state you want to persist
};

export type RootStateType = ReturnType<typeof appReducers>;
const persistedReducer = persistReducer(persistConfig, appReducers);

export default persistedReducer;
