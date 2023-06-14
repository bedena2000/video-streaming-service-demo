import React, { FC } from "react";
import styles from "./Header.module.css";

// Components
import NavigationItem from "../NavigationItem/NavigationItem";
import Navigation from "../Navigation/Navigation";

// Routing
import { Link } from "react-router-dom";

// Images
import HeaderLogo from "../../assets/images/logo.png";
import Logo1 from "../../assets/images/nav-logo-1.png";
import Logo2 from "../../assets/images/nav-logo-2.png";
import Logo3 from "../../assets/images/nav-logo-3.png";
import Logo4 from "../../assets/images/nav-logo-4.png";
import Logo5 from "../../assets/images/nav-logo-5.png";
import Logo6 from "../../assets/images/nav-logo-6.png";
import SearchLogo from "../../assets/images/search-icon.png";

const Header: FC = () => {
  const navListInfo = [
    {
      title: "Home",
      img: Logo1,
    },
    {
      title: "Movie",
      img: Logo2,
    },
    {
      title: "Drama",
      img: Logo3,
    },
    {
      title: "Music Video",
      img: Logo4,
    },
    {
      title: "Live Show",
      img: Logo5,
    },
    {
      title: "Comedies",
      img: Logo6,
    },
  ];

  return (
    <header className={styles["header"]}>
      <div>
        <img src={HeaderLogo} alt="logo" />
      </div>
      <Navigation navListInfo={navListInfo} />
      <div className={styles["header-search"]}>
        <img src={SearchLogo} alt="searchIcon" />
        <Link to="/sign-in">Sign In</Link>
      </div>
    </header>
  );
};

export default Header;
