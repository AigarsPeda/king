import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/Input";
import { validateLoginUser } from "../../helpers/validateLoginUser";
import CrownIcon from "../../icons/CrownIcon";
import sportNumbers from "../../images/sport-numbers.webp";
import { logInUser } from "../../redux/actions/authAction";
import { RootStateType } from "../../redux/reducers/reducers";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const { authError, isAuthenticated, isUserDataLoading } = useSelector(
    (state: RootStateType) => ({
      authError: state.errors.authError,
      isAuthenticated: state.auth.isAuthenticated,
      isUserDataLoading: state.user.isUserDataLoading
    })
  );

  const [error, setError] = useState<string | undefined>();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((state) => ({
      ...state,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { isValid, errorMessage } = validateLoginUser({
      email: user.email,
      password: user.password
    });

    if (!isValid) {
      setError(errorMessage);
      return;
    }

    setError(undefined);
    dispatch(
      logInUser({
        email: user.email,
        password: user.password
      })
    );
  };

  // After log in redirect
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-page">
      <div className="login-form-container">
        <CrownIcon />
        <h1>
          Hey, <br /> Login Now.
        </h1>
        <div className="login-options">
          <p>If you are new /</p> <Link to="/signup">Create Account</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            type={"email"}
            value={user.email}
            handleChange={handleChange}
            name={"email"}
            label={"Email"}
          />
          <Input
            type={"password"}
            value={user.password}
            handleChange={handleChange}
            name={"password"}
            label={"Password"}
          />
          {error && <div className="login-page-error">* {error}</div>}
          {authError && <div className="login-page-error">* {authError}</div>}

          <Button type="submit" isLoading={isUserDataLoading} title="Login" />
        </form>
        <div className="login-options">
          <p>Forgot Password /</p> <Link to="/reset">Reset</Link>
        </div>
      </div>

      <div className="login-image-container">
        <img src={sportNumbers} alt="black and white house" />
      </div>
    </div>
  );
};

export default LoginPage;
