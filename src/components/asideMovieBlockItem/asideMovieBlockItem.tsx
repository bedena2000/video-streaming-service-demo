import React, { FC } from "react";
import styles from "./asideMovieBlockItem.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import addToSelected from "../../redux/actions/selectedMoviesAction";

interface asideMovieBlockProps {
  posterPath: string;
  movieId: number;
}

const AsideMovieBlockItem: FC<asideMovieBlockProps> = ({
  posterPath,
  movieId,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToSelected(movieId));
  };
  return (
    <Link
      onClick={handleClick}
      to={`/movieDetails`}
      className={styles["asideMovieBlockItem"]}
    >
      <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt="poster" />
    </Link>
  );
};

export default AsideMovieBlockItem;
