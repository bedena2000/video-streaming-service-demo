import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import HomeWrapper from "../components/HomeWrapper/HomeWrapper";
import Header from "../components/Header/Header";
import MainInfo from "../components/MainInfo/MainInfo";
import Footer from "../components/Footer/Footer";
import Scroller from "../components/Scroller/Scrolle";

// Styling
import styles from "./Home.module.css";
import Poster from "../assets/images/movie-item.png";
import apiKeyAuth from "../api";

// Actions
import { addToTrending } from "../redux/actions/trendingMoviesActions";
import MovieBlock from "../components/MovieBlock/MovieBlock";

export const Home: FC = () => {
  const [trending, setTrending] = useState(null);
  const [topRated, setTopRated] = useState(null);
  const [tvSeries, setTvSeries] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const result = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKeyAuth}`
        );
        const data = await result.json();
        setTrending(data.results.slice(0, 9));
      } catch (error) {
        console.log(error);
      }
    };

    const fetchTopRated = async () => {
      try {
        const result = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKeyAuth}`
        );
        const data = await result.json();
        setTopRated(data.results.slice(0, 9));
      } catch (error) {
        console.log(error);
      }
    };

    const fetchPopularTVSeries = async () => {
      try {
        const result = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKeyAuth}`
        );
        const data = await result.json();
        setTvSeries(data.results.slice(0, 9));
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrending();
    fetchTopRated();
    fetchPopularTVSeries();
  }, []);

  return (
    <div>
      {/* Header */}
      <HomeWrapper>
        <Header />
        <MainInfo />
      </HomeWrapper>

      {trending ? (
        <MovieBlock movieList={trending} movieBlockTitle="Trending" />
      ) : (
        <p>Loading...</p>
      )}

      {topRated ? (
        <MovieBlock
          movieList={topRated}
          movieBlockTitle="Top Rated TV Series"
        />
      ) : (
        <p>Loading...</p>
      )}

      {tvSeries ? (
        <MovieBlock movieList={tvSeries} movieBlockTitle="Upcoming" />
      ) : (
        <p>Loading...</p>
      )}

      <Footer />
      <Scroller />
    </div>
  );
};
