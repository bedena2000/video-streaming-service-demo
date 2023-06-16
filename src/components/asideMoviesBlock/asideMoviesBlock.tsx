import React, { FC } from "react";
import styles from "./asideMoviesBlock.module.css";

// Components
import AsideMovieBlockItem from "../asideMovieBlockItem/asideMovieBlockItem";

interface movieBlockItemProps {
  poster_path: string;
  id: number;
}

interface asideMoviesBlockProps {
  blockTitle: string;
  moviesList: null | movieBlockItemProps[];
}

const AsideMoviesBlock: FC<asideMoviesBlockProps> = ({
  blockTitle,
  moviesList,
}) => {
  return (
    <div>
      <p className={styles["asideMovieBlockTitle"]}>{blockTitle}</p>
      <div className={styles["asideMovieBlockTopWratedWrapper"]}>
        {moviesList
          ? moviesList.map((item) => {
              return (
                <AsideMovieBlockItem
                  key={item.id}
                  posterPath={item.poster_path}
                  movieId={item.id}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default AsideMoviesBlock;
