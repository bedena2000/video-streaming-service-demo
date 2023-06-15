import { combineReducers } from "redux";

import trendingMoviesReducer from "./reducers/trendingMoviesReducer";
import moviesForYouReducer from "./reducers/moviesForYouReducer";
import mostPopularMovies from "./reducers/mostPopularMovies";

const rootReducer = combineReducers({
  trendingMovies: trendingMoviesReducer,
  moviesForYou: moviesForYouReducer,
  mostPopularMovies: mostPopularMovies,
});

export default rootReducer;
