import React, { FC, useState, useEffect } from "react";
import styles from "./Movie.module.css";

// Components
import Header from "../components/Header/Header";
import MovieInput from "../components/movieInput/MovieInput";
import SearchMovieWrapperItem from "../components/searchMovieWrapperItem/SearchMovieWrapperItem";

// Api
import apiKeyAuth from "../api";

// Types
interface itemProps {
    title: string;
    poster_path: string;
    id: number;
}

type MovieProps = any;

const Movie: FC<MovieProps> = () => {
  const [findMovies, setFindMovies] = useState([]);
  const [findMoviesText, setFindMoviesText] = useState("");
  const [isRendered, setIsRendered] = useState(false);

  const handleSearch = (movieText: string) => {
    setFindMoviesText(movieText.toLowerCase());
    setIsRendered(!isRendered);
  };

  useEffect(() => {
    const fetchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKeyAuth}&query=${findMoviesText}`;
    const findMovieByTitle = async () => {
      const result = await fetch(fetchUrl);
      const data = await result.json();
      setFindMovies(data.results);
    };
    findMovieByTitle();
  }, [isRendered]);

  return (
    <div className={styles["movie-wrapper"]}>
      <Header />
      <div className={styles["movie-search-box"]}>
        <MovieInput
          movieText={findMoviesText}
          changeMovieText={setFindMoviesText}
          searchFunc={handleSearch}
        />
        <div className={styles['movie-wrapper-box']}>
          {findMovies
            ? findMovies.map((item: itemProps) => (
                <SearchMovieWrapperItem
                  key={item.id}
                  movieTitle={item.title}
                  posterPath={item.poster_path}
                  id={item.id}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Movie;
