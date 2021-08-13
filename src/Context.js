import React, { useState, useEffect } from "react";
import { url } from "./constants/matcher";

const MyContext = React.createContext();

function ContextProvider({ children }) {
  //Add state to the context and pass it through the provider
  const [allPhotos, setAllPhotos] = useState([]);

  // As soon as the ContextProvider component renders, get the JSON data from the api.
  //Save data to state
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setAllPhotos(data);
    };
    getData();
  }, []);

  return (
    <MyContext.Provider value={{ allPhotos }}>{children}</MyContext.Provider>
  );
}

export { ContextProvider, MyContext };
