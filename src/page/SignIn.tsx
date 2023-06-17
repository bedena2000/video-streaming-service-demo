import React, { FC, useState, useEffect } from "react";
import styles from "./SingIn.module.css";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

// Firebase
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";


const SignIn: FC = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorPassword] = useState("");
  

  const handleSignIn = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (userName && userPassword.length > 6) {
      setErrorPassword("");

      const signInMethod = async () => {
        try {
          const result = await signInWithEmailAndPassword(auth, userName, userPassword);
          console.log(result);
        } catch (error) {
          setErrorPassword("Wrong user email or password, try again");
          console.log(error);
        }
      };

      signInMethod();
    } else {
      setErrorPassword(
        "Your username is empty or password length is more than 6 characters, or username already exist, please add proper value"
      );
    }
  };

  return (
    <div>
      <Header />

      <div className={styles["sign-in-wrapper"]}>
        <form action="#">
          <div>
            <div>
              <label htmlFor="userName">Email</label>
              <input
                required
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                type="email"
                id="userName"
              />
            </div>
            <div>
              <label htmlFor="userPassword">Password</label>
              <input
                required
                value={userPassword}
                onChange={(event) => setUserPassword(event.target.value)}
                type="password"
                id="userPassword"
              />
            </div>
          </div>

          <Link onClick={handleSignIn} to="/">
            Sign In
          </Link>
          <Link to="/register">Register</Link>
          <div>
            {errorMessage ? (
              <p
                style={{
                  color: "red",
                  fontSize: "18px",
                  padding: "0px 16px 16px 10px",
                }}
              >
                {errorMessage}
              </p>
            ) : null}
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default SignIn;
