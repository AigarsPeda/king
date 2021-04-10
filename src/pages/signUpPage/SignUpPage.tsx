import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { validateCreateUser } from "../../helpers/validateCreateUser";
import CrownIcon from "../../icons/CrownIcon";
import volley from "../../images/volley.webp";
import { signUpUser } from "../../redux/actions/authAction";
import { RootStateType } from "../../redux/reducers/reducers";

const SignUpPage: React.FC = () => {
  const dispatch = useDispatch();
  const { authError, isAuthenticated, isUserDataLoading } = useSelector(
    (state: RootStateType) => ({
      authError: state.errors.authError,
      isAuthenticated: state.auth.isAuthenticated,
      isUserDataLoading: state.user.isUserDataLoading
    })
  );

  const [error, setError] = useState<string | undefined>();
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((state) => ({
      ...state,
      [name]: value
    }));
  };

  const checkBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      setError("passwords don't match");
      return;
    }

    const signUpUserData = {
      name: user.name,
      surname: user.surname,
      email: user.email,
      password: user.password,
      terms: checked
    };

    const { isValid, errorMessage } = validateCreateUser(signUpUserData);

    if (!isValid) {
      setError(errorMessage);
      return;
    }

    dispatch(signUpUser(signUpUserData));
  };

  // After sign up redirect
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signup-page">
      <div className="signup-page-image-container">
        <img src={volley} alt="people playing volleyball" />
      </div>
      <div className="signup-page-form-container">
        <CrownIcon />
        <h1>
          Hey, <br /> Create Account Now.
        </h1>
        <div className="signup-options">
          <p>Already have an account /</p> <Link to="/login">Log In Now</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="signup-page-form-field">
            <input
              className="signup-page-form-input"
              placeholder=" "
              type="text"
              value={user.name}
              onChange={handleChange}
              name="surname"
              autoComplete="off"
            />
            <label htmlFor="name" className="signup-page-form-label">
              Name
            </label>
          </div>
          <div className="signup-page-form-field">
            <input
              className="signup-page-form-input"
              placeholder=" "
              type="text"
              value={user.surname}
              onChange={handleChange}
              name="surname"
              autoComplete="off"
            />
            <label htmlFor="surname" className="signup-page-form-label">
              Surname
            </label>
          </div>
          <div className="signup-page-form-field">
            <input
              className="signup-page-form-input"
              placeholder=" "
              type="email"
              value={user.email}
              onChange={handleChange}
              name="surname"
              autoComplete="off"
            />
            <label htmlFor="email" className="signup-page-form-label">
              Email
            </label>
          </div>
          <div className="signup-page-form-field">
            <input
              className="signup-page-form-input"
              placeholder=" "
              type="password"
              value={user.password}
              onChange={handleChange}
              name="password"
              autoComplete="off"
            />
            <label htmlFor="password" className="signup-page-form-label">
              Password
            </label>
          </div>
          <div className="signup-page-form-field">
            <input
              className="signup-page-form-input"
              placeholder=" "
              type="password"
              value={user.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              autoComplete="off"
            />
            <label
              htmlFor="confirm password"
              className="signup-page-form-label"
            >
              Confirm password
            </label>
          </div>
          <div className="terms">
            <input
              type="checkbox"
              name="terms"
              checked={checked}
              onChange={checkBoxChange}
            />
            <label htmlFor="terms">
              <Link to="/terms">I’m okay with Terms of Service</Link>
            </label>
          </div>
          {error && <div className="signup-page-error">* {error}</div>}
          {authError && <div className="signup-page-error">* {authError}</div>}
          <button
            type="submit"
            disabled={isUserDataLoading}
            className={`${isUserDataLoading && "loading"}`}
          >
            {!isUserDataLoading && "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
