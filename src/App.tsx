import React from "react";

// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import { Home } from "./page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
