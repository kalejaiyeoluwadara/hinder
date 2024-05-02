'use client'
import React, { createContext, useState, useContext } from "react";

// Create a context
export const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [state, setState] = useState(0);

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to consume the context
export const useGlobal = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useGlobal must be used within a MyProvider");
  }
  return context;
};
