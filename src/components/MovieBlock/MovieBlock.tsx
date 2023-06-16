import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MovieBlock.module.css";

import apiKeyAuth from "../../api";

// Components
import MovieBlockItem from "../MovieBlockItem/MovieBlockItem";
import MovieBlockItem2 from "../MovieBlockItem/MovieBlockItem2";

import SearchIcon from "../../assets/images/search-all.png";

// Actions

type movieListObject = {
  original_title: string;
  poster_path: string;
  id: number;
};

interface MovieBlockProps {
  movieList: movieListObject[] | null;
  movieBlockTitle: string;
}

const MovieBlock: FC<MovieBlockProps> = ({ movieList, movieBlockTitle }) => {
  return (
    <div className={styles["movie-block"]}>
      <div className={styles["movie-block-info-wrapper"]}>
        <p className={styles["movie-block-title"]}>{movieBlockTitle}</p>
        <div className={styles["movie-block-see-all"]}>
          <p>See All</p>
          <img src={SearchIcon} alt="searchAll" />
        </div>
      </div>

      <div className={styles["movie-list-wrapper"]}>
        {movieList &&
          movieList.map((item) => {
            return (
              <MovieBlockItem
                key={item.id}
                moviePosterName={item.original_title}
                moviePosterPath={item.poster_path}
                movieId={item.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MovieBlock;
