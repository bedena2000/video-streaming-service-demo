import React, { FC } from "react";

// Components
import HomeWrapper from "../components/HomeWrapper/HomeWrapper";
import Header from "../components/Header/Header";
import MainInfo from "../components/MainInfo/MainInfo";

// Styling
import styles from "./Home.module.css";

export const Home: FC = () => {
  return (
    <div>
      {/* Header */}
      <HomeWrapper>
        <Header />
        <MainInfo />
      </HomeWrapper>
    </div>
  );
};
