import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="checkout-page" element={<CheckoutPage />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
