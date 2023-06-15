interface Movie {
  type: string;
  payload: any;
}

const trendingMoviesReducer = (state = [], action: Movie) => {
  switch (action.type) {
    case "MOVIES_INITIALIZATION":
        return action.payload;
    case "ADD_MOVIES/TRENDING":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default trendingMoviesReducer;
