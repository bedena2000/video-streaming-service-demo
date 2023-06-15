interface Movie {
    type: string;
    payload: any;
  }
  
  const moviesForYouReducer = (state = [], action: Movie) => {
    switch (action.type) {
      case "ADD_MOVIES/TRENDING":
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default moviesForYouReducer;
  