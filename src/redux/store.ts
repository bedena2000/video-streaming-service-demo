import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

// Reducer
import rootReducer from "./reducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(
      applyMiddleware(thunk)
  )
);

export default store;
