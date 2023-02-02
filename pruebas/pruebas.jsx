import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "chackout-page",
        element: <CheckoutPage />,
      },
    ],
  },
]);