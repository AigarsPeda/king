import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import building from "../../images/building.jpg";
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
        <img src={building} alt="black and white bilging" />
      </div>
      <div className="signup-page-form-container">
        <h1>The King.</h1>
        <h3>Sign Up</h3>
        <p>Enter your credentials to proceed</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={user.name}
            onChange={handleChange}
            name="name"
            autoComplete="on"
          />
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            value={user.surname}
            onChange={handleChange}
            name="surname"
            autoComplete="on"
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            value={user.email}
            onChange={handleChange}
            name="email"
            autoComplete="on"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={user.password}
            onChange={handleChange}
            name="password"
            autoComplete="off"
          />
          <button type="submit">Sign Up</button>
          <Link to="/login">Already have an account?</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
