import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "./index.scss";
import store from "./redux/store";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  // const location = useLocation();
  // const isMatch = matchPath(location.pathname, {
  //   path: ["/login", "/signup"],
  //   exact: true,
  //   strict: true
  // });

  // console.log(isMatch);

  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={<div>loading</div>} persistor={persistor}>
          <div className="App">
            <AppRoutes />
          </div>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
