import React, { useState, useEffect } from "react";

const MyContext = React.createContext();

function ContextProvider({ children }) {
  //Add state to the context and pass it through the provider
  const [allPhotos, setAllPhotos] = useState([]);

  const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

  const url = `https://api.unsplash.com/photos?client_id=${
    ACCESS_KEY + "&query=arts-culture" + "&per_page=100"
  }`;

  // As soon as the ContextProvider component renders, get the JSON data from the api.
  //Save data to state
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setAllPhotos(data);
    };
    getData();
  }, [url]);

  return (
    <MyContext.Provider value={{ allPhotos }}>{children}</MyContext.Provider>
  );
}

export { ContextProvider, MyContext };
