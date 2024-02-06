/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { createContext, useEffect } from "react";

const AppContext = createContext();
const API = " https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
  const getProduct = async (url) => {
    const res = await axios.get(url);
    const products = res.data;
    console.log(products[0]);
  };

  useEffect(() => {
    getProduct(API);
  }, []);

  return <AppContext.Provider value={"Shanto"}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };

// api https://api.pujakaitem.com/api/products
