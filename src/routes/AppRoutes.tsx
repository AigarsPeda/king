import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "../pages/dashboardPage/DashboardPage";
import LoginPage from "../pages/loginPage/LoginPage";
import NoMatchPage from "../pages/noMatch/NoMatchPage";
import SignUpPage from "../pages/signUpPage/SignUpPage";
import AuthRoute from "../utils/AuthRoute";

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/login" component={LoginPage} />
      <AuthRoute exact path="/" component={DashboardPage} />

      <Route component={NoMatchPage} />
    </Switch>
  );
};

export default AppRoutes;
