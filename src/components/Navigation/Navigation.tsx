import React, { FC } from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import styles from "./Navigation.module.css";

interface NavigationObject {
  img: string;
  title: string;
  toLink: string;
}

interface NavigationProps {
  navListInfo: NavigationObject[];
}

const Navigation: FC<NavigationProps> = ({ navListInfo }) => {
  return (
    <div className={styles["header-navigation"]}>
      {navListInfo.map((item) => (
        <NavigationItem
          img={item.img}
          title={item.title}
          key={item.img}
          to={item.toLink}
        />
      ))}
    </div>
  );
};

export default Navigation;
