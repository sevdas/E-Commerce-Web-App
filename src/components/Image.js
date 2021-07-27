import React, { useState } from "react";

export default function Image({ className, img }) {
  //Track the hover state
  const [hovered, setHovered] = useState(false);

  //Display icons on hover
  const heartIcon = hovered && <i className="ri-heart-line"></i>;
  const addIcon = hovered && <i className="ri-add-box-line"></i>;

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.urls.thumb} alt={img.description} className="image-grid" />
      {heartIcon}
      {addIcon}
    </div>
  );
}
