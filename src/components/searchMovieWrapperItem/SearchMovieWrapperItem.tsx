import React, { FC } from "react";
import styles from "./SearchMovieWrapperItem.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import addToSelected from "../../redux/actions/selectedMoviesAction";

interface SearchMovieWrapperItemProps {
  posterPath: string;
  movieTitle: string;
  id: number;
}

const SearchMovieWrapperItem: FC<SearchMovieWrapperItemProps> = ({
  posterPath,
  movieTitle,
  id,
}) => {
  const dispatch = useDispatch();

  const handlePosterClick = () => {
    dispatch(addToSelected(id));
  };

  return (
    <Link
      to="/movieDetails"
      onClick={handlePosterClick}
      className={styles["search-movie-item"]}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        alt="moviePoster"
      />
    </Link>
  );
};

export default SearchMovieWrapperItem;
