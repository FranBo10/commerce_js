import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar />
      <CheckoutPage />
      <Products />
    </Fragment>
  );
}

export default App;
