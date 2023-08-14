import React, { useState, useEffect } from "react";
import Graduation from "./Graduation";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("https://photo-server-61rq.onrender.com/Categories")
      .then((response) => response.json())
      .then((data) => {
        setPortfolio(data);
      });
  }, []);

  function handleCardClick(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="portfolio-container">
        
      <h1 className="portfolio-heading">PORTFOLIOS</h1>
      <h3>Capturing Moments in Pixels: Explore a World of Stunning Photography – from Portraits to Landscapes, We Frame Life's Beauty Through the Lens.</h3>
      <div className="portfolio-grid">
        {portfolio.map((port, index) => (
          <div
            className="portfolio-card"
            key={index}
            onClick={() => handleCardClick(port)}
          >
            <img className="portfolio-image" src={port.image_url} alt="Our services" />
            <h2 className="portfolio-name">{port.name}</h2>
          </div>
        ))}
      </div>
      {selectedCategory && <Graduation category={selectedCategory} />}
    </div>
  );
}

export default Portfolio;
