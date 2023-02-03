import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./routes/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>
);
