import React, { useState, createContext, useContext } from "react";
// import { useLogin } from "../hooks";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [openAlert, setOpenAlert] = useState(false);

  const [dataAlert, setAlert] = useState("");

  const toggleAlert = (data) => {
    setAlert(data);
    setOpenAlert(!openAlert);
  };

  return (
    <GlobalContext.Provider
      value={{
        // getters
        dataAlert,
        openAlert,
        // setters
        toggleAlert,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);
export { GlobalProvider, useGlobalContext };
export default GlobalContext;
