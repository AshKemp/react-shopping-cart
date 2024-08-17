import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductListPage from "./pages/productList";
import CartListPage from "./pages/cartList";
import ProductDetailsPage from "./pages/productDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartListPage />} />
      </Routes>
    </>
  );
}

export default App;
