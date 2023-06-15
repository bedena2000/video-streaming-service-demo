import React, { FC } from "react";
import styles from './MovieBlockItem2.module.css';

interface MovieBlockItemProps {
  moviePosterPath: string;
  moviePosterName: string;
}

const MovieBlockItem2: FC<MovieBlockItemProps> = ({
  moviePosterPath,
  moviePosterName,
}) => {
  return <div className={styles['movie-block-item']}>
    <img src={"https://image.tmdb.org/t/p/w500/" + moviePosterPath} alt="moviePoster" />
    <p>{moviePosterName}</p>
  </div>;
};

export default MovieBlockItem2;
