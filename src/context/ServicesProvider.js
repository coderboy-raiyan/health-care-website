import React, { createContext } from "react";
import useServices from "./../hooks/useServices";

export const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
  const alldata = useServices();
  return (
    <ServicesContext.Provider value={alldata}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
