import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Products />
    </Fragment>
  );
};

export default Home;
