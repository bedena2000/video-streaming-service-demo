import React, { FC, ReactNode } from "react";
import styles from "./HomeWrapper.module.css";

interface HomeWrapperProps {
  children: ReactNode;
}

const HomeWrapper: FC<HomeWrapperProps> = ({ children }) => {
  return <div className={styles["homeWrapper"]}>{children}</div>;
};

export default HomeWrapper;
