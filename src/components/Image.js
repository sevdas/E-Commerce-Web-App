import React, { useState, useContext } from "react";
import { PhotosContext } from "../Context";
import PropTypes from "prop-types";

export default function Image({ className, img }) {
  //Track the hover state
  const [hovered, setHovered] = useState(false);
  const { toggleLikedPhotos } = useContext(PhotosContext);

  //Display icons on hover & filled heart on click
  const heartIcon = () => {
    if (img.liked_by_user) {
      return (
        <i
          className="ri-heart-fill"
          onClick={() => toggleLikedPhotos(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line"
          onClick={() => toggleLikedPhotos(img.id)}
        ></i>
      );
    }
  };

  const addIcon = hovered && <i className="ri-add-box-line"></i>;

  //Ensure component is using the correct data type.
  Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
      //Specify properties
      id: PropTypes.string.isRequired,
      urls: PropTypes.object.isRequired,
      liked_by_user: PropTypes.bool,
    }),
  };

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.urls.thumb} alt={img.description} className="image-grid" />
      {heartIcon()}
      {addIcon}
    </div>
  );
}
