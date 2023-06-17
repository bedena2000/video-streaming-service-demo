import React, { FC, useState, useEffect } from "react";
import styles from "./SingIn.module.css";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

// Firebase
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

// Types
type useImageTypes = any;

const Register: FC = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserImage] = useState<useImageTypes>("");
  const [errorMessage, setErrorPassword] = useState("");

  const handleSignIn = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (userName && userPassword.length > 6 && userEmail) {
      setErrorPassword("");

      const registerNewUser = async () => {
        const result = await createUserWithEmailAndPassword(
          auth,
          userEmail,
          userPassword
        );
        console.log(result);
      };

      registerNewUser();
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
              <label htmlFor="userName">Username:</label>
              <input
                required
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                type="text"
                id="userName"
              />
            </div>
            <div>
              <label htmlFor="userPassword">Password:</label>
              <input
                required
                value={userPassword}
                onChange={(event) => setUserPassword(event.target.value)}
                type="password"
                id="userPassword"
              />
            </div>
            <div>
              <label htmlFor="userEmail">Email:</label>
              <input
                required
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
                type="email"
                id="userEmail"
              />
            </div>
            <div>
              <label htmlFor="userPassword">Picture:</label>
              <input
                required
                value={userPassword}
                onChange={(event) => setUserImage(event.target.value)}
                type="file"
                id="userImage"
              />
            </div>
          </div>

          <Link onClick={handleSignIn} to="/">
            Sign in
          </Link>
          <Link to="/sign-in">Log in</Link>
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

export default Register;
