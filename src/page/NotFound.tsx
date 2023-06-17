import React, { FC } from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

// Components
import Header from "../components/Header/Header";

const NotFound: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles["error-page"]}>
        <h1>
          Sorry We Did not create that page, or it was wrong url, please try
          another routes
        </h1>
        <Link className={styles['back-button']} to={`/`}>
          <BiArrowBack width="20" height="20" />
          <p>back</p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
