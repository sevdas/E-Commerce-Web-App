import React, { useState, useEffect } from "react";

const MyContext = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);

  const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
  const url = `https://api.unsplash.com//search/photos?query=arts-culture&client_id=${ACCESS_KEY}`;

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

  console.log(allPhotos);

  return (
    <MyContext.Provider value={{ allPhotos }}>{children}</MyContext.Provider>
  );
}

export { ContextProvider, MyContext };
