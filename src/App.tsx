import React from "react";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import { Home } from "./page/Home";
import MovieDetail from "./page/MovieDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movieDetails",
    element: <MovieDetail />
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
