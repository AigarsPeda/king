import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import IconCrown from "../../icons/IconCrown";
// image
import sportNumbers from "../../images/sport-numbers.webp";
import { logInUser } from "../../redux/actions/authAction";
import { RootStateType } from "../../redux/reducers/reducers";

const LoginPage: React.FC = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootStateType) => ({
    isAuthenticated: state.auth.isAuthenticated
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((state) => ({
      ...state,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(logInUser(user));
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-page">
      <div className="login-form-container">
        <IconCrown />
        <h1>
          Hey, <br /> Login Now.
        </h1>
        <div className="login-options">
          <p>If you are new /</p> <Link to="/signup">Create Account</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Your email"
            type="email"
            value={user.email}
            onChange={handleChange}
            name="email"
            autoComplete="on"
          />
          <input
            placeholder="Your password"
            type="password"
            value={user.password}
            onChange={handleChange}
            name="password"
            autoComplete="off"
          />
          <div className="terms">
            <input type="checkbox" name="terms" value="true" />
            <label htmlFor="terms">
              <Link to="/terms">I’m okay with Terms of Service</Link>
            </label>
          </div>

          <button type="submit">Login</button>
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
