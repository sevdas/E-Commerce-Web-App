import React from "react";

const MyContext = React.createContext();

function ContextProvider({ children }) {
  return <MyContext.Provider value={""}>{children}</MyContext.Provider>;
}

export { ContextProvider, MyContext };
