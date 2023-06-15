import React, { FC } from "react";
import styles from "./Footer.module.css";

import Logo from "../../assets/images/logo.png";
import fbIcon from "../../assets/images/fb-icon.png";
import instaIcon from "../../assets/images/insta-icon.png";

const Footer: FC = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-left']}>
        <p>Feedback</p>
        <p>Help</p>
        <p>FAQ</p>
      </div>

      <div className={styles['footer-middle']}>
        <img src={Logo} alt="footerLogo" />
      </div>

      <div className={styles['footer-right']}>
        <p>Follow ON</p>
        <div>
          <img src={fbIcon} alt="fbIcon" />
          <img src={instaIcon} alt="instaIcon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
