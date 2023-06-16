type actionType = {
  type: string;
  payload: Object;
};

const selectedMoviesReducer = (state = null, action: actionType) => {
  switch (action.type) {
    case "select_movie":
      return action.payload;
      break;
    default:
      return state;
      break;
  }
};

export default selectedMoviesReducer;
