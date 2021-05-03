import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./authReducer";
import { errorsReducer } from "./errorsReducer";
import { tournamentsReducer } from "./tournamentsReducer";
import { UIReducer } from "./uiReducer";
import { userReducer } from "./userReducer";

/* COMBINED REDUCERS **/
const reducers = {
  tournaments: tournamentsReducer,
  errors: errorsReducer,
  auth: authReducer,
  user: userReducer,
  ui: UIReducer
};

const appReducers = combineReducers(reducers);

/* WHITE LISTS REDUCER TO STORE STATE BETWEEN BROWSER REFRESHES  **/
const persistConfig = {
  key: "primary",
  storage,
  whitelist: ["auth", "user", "ui", "tournaments"]
};

export type RootStateType = ReturnType<typeof appReducers>;
const persistedReducer = persistReducer(persistConfig, appReducers);

export default persistedReducer;
