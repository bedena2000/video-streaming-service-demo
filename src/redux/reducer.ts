import { combineReducers } from "redux";

import trendingMoviesReducer from "./reducers/trendingMoviesReducer";
import moviesForYouReducer from "./reducers/moviesForYouReducer";
import mostPopularMovies from "./reducers/mostPopularMovies";
import selectedMoviesReducer from "./reducers/selectedMoviesReducer";

const rootReducer = combineReducers({
  trendingMovies: trendingMoviesReducer,
  moviesForYou: moviesForYouReducer,
  mostPopularMovies: mostPopularMovies,
  selectedMovies: selectedMoviesReducer
});

export default rootReducer;
