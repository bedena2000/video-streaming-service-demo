import React, { FC } from "react";
import styles from "./MovieBlockItem.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Actions
import addToSelected from "../../redux/actions/selectedMoviesAction";

interface MovieBlockItemProps {
  moviePosterPath: string;
  moviePosterName: string;
  movieId: number;
}

const MovieBlockItem: FC<MovieBlockItemProps> = ({
  moviePosterPath,
  moviePosterName,
  movieId,
}) => {
  const dispatch = useDispatch();

  const handleMovieClick = () => {
    dispatch(addToSelected(movieId));
  };

  return (
    <Link
      to={"movieDetails"}
      onClick={handleMovieClick}
      className={styles["movie-block-item"]}
    >
      <img
        src={"https://image.tmdb.org/t/p/w500/" + moviePosterPath}
        alt="moviePoster"
      />
      <p>{moviePosterName}</p>
    </Link>
  );
};

export default MovieBlockItem;
