
import React from "react";

function Graduation({ category }) {
  return (
    <div className="categoryImages"> 
      <h1>{category.name}</h1>
      {category.images.map((image, imageIndex) => (
        <img key={imageIndex} src={image} alt="" />
      ))}
    </div>
  );
}

export default Graduation;
