import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import IconCrown from "../../icons/IconCrown";
import volley from "../../images/volley.webp";
import { signUpUser } from "../../redux/actions/authAction";
import { RootStateType } from "../../redux/reducers/reducers";

const SignUpPage: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootStateType) => ({
    isAuthenticated: state.auth.isAuthenticated
  }));

  const [user, setUser] = useState({
    name: "",
    surname: "",
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
    dispatch(signUpUser(user));
  };

  // after sign up redirect
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signup-page">
      <div className="signup-page-image-container">
        <img src={volley} alt="black and white bilging" />
      </div>
      <div className="signup-page-form-container">
        <IconCrown />
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
          <div className="terms">
            <input type="checkbox" name="terms" value="true" />
            <label htmlFor="terms">
              <Link to="/terms">I’m okay with Terms of Service</Link>
            </label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
