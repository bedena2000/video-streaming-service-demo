type movieType = number;

const addToSelected = (movieId: movieType) => {
    return {
        type: "select_movie",
        payload: movieId
    };
};

export default addToSelected;