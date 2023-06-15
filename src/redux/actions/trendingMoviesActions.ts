type movieList = [];
interface addToTrendingReturn {
    type: string;
    payload: any[];
}

export const addToTrending = (movieList: movieList): addToTrendingReturn => {
  return { 
    type: "MOVIES_INITIALIZATION",
    payload: movieList,
  };
};
