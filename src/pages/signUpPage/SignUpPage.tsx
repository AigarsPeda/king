import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { validatePassword } from "../../helpers/validatePassword";
import CrownIcon from "../../icons/CrownIcon";
import volley from "../../images/volley.webp";
import { signUpUser } from "../../redux/actions/authAction";
import { RootStateType } from "../../redux/reducers/reducers";

const SignUpPage: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, isUserDataLoading } = useSelector(
    (state: RootStateType) => ({
      isAuthenticated: state.auth.isAuthenticated,
      isUserDataLoading: state.user.isUserDataLoading
    })
  );

  const [checked, setChecked] = useState(false);

  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [termsError, setTermsError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();

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

    if (!checked) {
      return setTermsError("You must agree with Terms of Service");
    } else {
      setTermsError(undefined);
    }

    const passwordValidationError = validatePassword(
      user.password,
      user.confirmPassword
    );

    if (passwordValidationError) {
      return setPasswordError(passwordValidationError);
    } else {
      setPasswordError(undefined);
    }

    const signUpUserData = {
      name: user.name,
      surname: user.surname,
      email: user.email,
      password: user.password
    };
    dispatch(signUpUser(signUpUserData));
  };

  // after sign up redirect
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
          <input
            placeholder="Your name"
            type="text"
            value={user.name}
            onChange={handleChange}
            name="name"
            autoComplete="on"
          />
          <input
            placeholder="Your surname"
            type="text"
            value={user.surname}
            onChange={handleChange}
            name="surname"
            autoComplete="on"
          />
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
          <input
            placeholder="Confirm Your password"
            type="password"
            value={user.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            autoComplete="off"
          />
          {passwordError && <p>{passwordError}</p>}
          <div className="terms">
            <input
              type="checkbox"
              name="terms"
              checked={checked}
              onChange={checkBoxChange}
            />
            {termsError && <p>{termsError}</p>}
            <label htmlFor="terms">
              <Link to="/terms">I’m okay with Terms of Service</Link>
            </label>
          </div>
          <button
            type="submit"
            disabled={isUserDataLoading}
            className={`${isUserDataLoading ? "loading" : ""}`}
          >
            {!isUserDataLoading && "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
