/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [productDetails, setProductDetails] = useState(null);

  async function fetchListOfProducts() {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const result = await apiResponse.json();
    console.log(result);

    if (result && result?.products) {
      setProductList(result?.products);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  console.log(productList);
  return (
    <ShoppingCartContext.Provider
      value={{
        productList,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
