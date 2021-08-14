import React, { useState, useEffect } from "react";
import { url } from "./constants/matcher";

const PhotosContext = React.createContext();

function PhotosContextProvider({ children }) {
  //Add state to the context and pass it through the provider
  const [allPhotos, setAllPhotos] = useState([]);

  // As soon as the PhotosContextProvider component renders, get the JSON data from the api.
  //Save data to state
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setAllPhotos(data);
    };
    getData();
  }, []);

  const toggleLikedPhotos = (id) => {
    //Avoid updating state directly
    const allPhotosArr = allPhotos.map((photo) => {
      //Update the array of allPhotos by flipping liked property of photo with matching id
      if (photo.id === id) {
        return { ...photo, liked_by_user: !photo.liked_by_user };
      }
      return photo;
    });
    //Set state to the updated array.
    setAllPhotos(allPhotosArr);
  };

  return (
    <PhotosContext.Provider value={{ allPhotos, toggleLikedPhotos }}>
      {children}
    </PhotosContext.Provider>
  );
}

export { PhotosContextProvider, PhotosContext };
