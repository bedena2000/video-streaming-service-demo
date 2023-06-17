import React from "react";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import { Home } from "./page/Home";
import MovieDetail from "./page/MovieDetail";
import Movie from "./page/Movie";
import NotFound from "./page/NotFound";
import SignIn from "./page/SignIn";
import Register from "./page/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movieDetails",
    element: <MovieDetail />
  }, {
    path: "/movie",
    element: <Movie /> 
  },
  {
    path: "/sign-in",
    element: <SignIn /> 
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
