import React from "react";

export default function Image({ className, img }) {
  return (
    <div className={`${className} image-container`}>
      <img src={img.urls.thumb} alt={img.description} className="image-grid" />
    </div>
  );
}
