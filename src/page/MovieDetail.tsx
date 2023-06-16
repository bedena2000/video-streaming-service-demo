import React, { FC, useEffect, useState } from "react";
import styles from "./MovieDetail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Components
import Header from "../components/Header/Header";
import MovieDetailBlock from "../components/MovieDetailBlock/MovieDetailBlock";
import AsideMoviesBlock from "../components/asideMoviesBlock/asideMoviesBlock";

// Icons
import WatchListIcon from "../assets/images/watchlist-icon.png";

// Api
import apiKeyAuth from "../api";

// Types
interface stateMovie {
  selectedMovies: number;
}

const MovieDetail: FC = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [movieTrailer, setMovieTrailer] = useState("");
  const [topRatedMovies, setTopRatedMovies] = useState(null);

  const movieId = useSelector((state: stateMovie) => state.selectedMovies);
  const findUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKeyAuth}`;
  const findTrailer = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKeyAuth}`;
  const findTopRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKeyAuth}`;

  const navigate = useNavigate();

  useEffect(() => {
    const findMovie = async () => {
      try {
        if (movieId) {
          const result = await fetch(findUrl);
          const data = await result.json();
          setMovieDetail(data);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    };

    const findMovieTrailer = async () => {
      try {
        if (movieId) {
          const result = await fetch(findTrailer);
          const data = await result.json();
          const movieTrailerKey = data.results.find(
            (item: any) => item.type === "Trailer"
          );
          const realTrailerUrl = movieTrailerKey
            ? movieTrailerKey.key
            : data.results.slice(0, 1)[0].key;

          const trailerResult = `https://www.youtube.com/embed/${realTrailerUrl}`;
          setMovieTrailer(trailerResult);
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };

    const findTopRated = async () => {
      try {
        if (movieId) {
          const result = await fetch(findTopRatedUrl);
          const data = await result.json();
          setTopRatedMovies(data.results.slice(0, 6));
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };

    findMovie();
    findMovieTrailer();
    findTopRated();
  }, []);

  const movieDetailNew = movieDetail ?? {
    backdrop_path: "",
    original_title: "",
    status: "",
    release_date: "",
    overview: "",
    movieDescription: "",
  };

  return (
    <div>
      <Header />

      <div className={styles["movie-detail-wrapper"]}>
        <div className={styles["movie-detail-wrapper-left"]}>
          {movieDetail ? (
            <MovieDetailBlock
              posterPath={movieDetailNew.backdrop_path}
              youtubePath={movieTrailer}
              movieName={movieDetailNew.original_title}
              movieStatus={movieDetailNew.status}
              movieReleaseTime={movieDetailNew.release_date}
              movieDescription={movieDetailNew.overview}
            />
          ) : null}
          {movieDetail ? (
            <div>
              <div className={styles["movie-detail-top"]}>
                <div className={styles["movie-detail-top-left"]}>
                  <h3 className={styles["movie-detail-title"]}>
                    {movieDetailNew.original_title}
                  </h3>
                  <p className={styles["movie-detail-release"]}>
                    Released: <span>{movieDetailNew.release_date}</span>
                  </p>
                  <div className={styles["movie-detail-status"]}>
                    <h4>Status: </h4>
                    <p>{movieDetailNew.status}</p>
                  </div>
                </div>
                <div className={styles["movie-detail-wishlist"]}>
                  <div>
                    <img src={WatchListIcon} alt="watchlist" />
                  </div>
                  <p>watchlist</p>
                </div>
              </div>
              <div className={styles["movie-detail-description"]}>
                <h4>Description</h4>
                <p>{movieDetailNew.overview}</p>
              </div>
            </div>
          ) : null}
        </div>

        <div className={styles["movie-detail-wrapper-right"]}>
          {topRatedMovies ? (
            <AsideMoviesBlock
              blockTitle="Top Rated"
              moviesList={topRatedMovies}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
