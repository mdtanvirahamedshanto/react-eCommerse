/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={"Shanto"}>{children}</AppContext.Provider>;
};

const ProductGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
