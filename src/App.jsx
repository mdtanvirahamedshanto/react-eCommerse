import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
