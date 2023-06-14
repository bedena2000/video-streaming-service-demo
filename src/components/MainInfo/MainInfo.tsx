import React, { FC } from "react";
import styles from "./MainInfo.module.css";

const MainInfo: FC = () => {
  return (
    <div className={styles["main-info"]}>
      <p className={styles["main-info-smalltext"]}>Welcome to BD Screens</p>
      <p className={styles["main-info-title"]}>
        Download Unlimited Movies, Drama, Music Video and More Content.
      </p>
      <p className={styles["main-info-description"]}>
        Enjoy exclusive Music Video popular movies and Live shows. Subscribe BD
        Screen now
      </p>
      <div className={styles["main-info-button-wrapper"]} >
        <input type="text" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MainInfo;