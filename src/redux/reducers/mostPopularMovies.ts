interface Movie {
    type: string;
    payload: any;
  }
  
  const mostPopularMovies = (state = [], action: Movie) => {
    switch (action.type) {
      case "ADD_MOVIES/TRENDING":
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default mostPopularMovies;
  