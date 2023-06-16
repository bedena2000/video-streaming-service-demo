import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.css";

interface NavigationProps {
  title: string;
  img: string;
  to: string;
}

const NavigationItem: FC<NavigationProps> = ({ title, img, to }) => {
  return (
    <NavLink className={styles["navigation-item"]} to={to}>
      <img src={img} alt="logoItem" />
      <p>{title}</p>
    </NavLink>
  );
};

export default NavigationItem;
