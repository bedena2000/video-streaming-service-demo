import React, { FC } from "react";
import styles from "./asideMovieBlockItem.module.css";
import { Link } from "react-router-dom";

interface asideMovieBlockProps {
  posterPath: string;
  movieId: number;
}

const AsideMovieBlockItem: FC<asideMovieBlockProps> = ({
  posterPath,
  movieId,
}) => {
  const handleClick = () => {
    console.log(movieId);
  };
  return (
    <Link to={`/movieDetails`} className={styles["asideMovieBlockItem"]}>
      <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt="poster" />
    </Link>
  );
};

export default AsideMovieBlockItem;
