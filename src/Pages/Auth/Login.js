import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";
import { UserContext } from "../../data.js";

function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        // const user = userCredential.user;
        setUser(userCredential.user);
        navigate("/");
        // ...
      })
      .catch(error => alert(error.message));
  };
  const register = e => {
    e.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // it successfully created a user with email and password
        // console.log(userCredential);
        setUser(userCredential.user);
        console.log(user);
        navigate("/");
      })
      .catch(error => alert(error.message));
    // some fancy firebase register
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png"
          alt="amazon logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Ferdinand Clone Conditions of Use
          and Privacy Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
