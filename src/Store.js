import React, { useEffect, useState } from "react";

function Store() {
const [animals, setAnimal] = useState([]);

useEffect(() => {
    fetch("http://localhost:8001/animals")
      .then(response => response.json())
      .then(data => setAnimal(data))
      .catch(error => {
        console.error('error fetching data:', error);
      });
  }, []);


    return (
        <>
            <h1>List of merchandise up for sale</h1>
            <div id="container">
                <ul id="card">
                  {animals.map((animal) => (
                    <li key={animal.name}>
                        <img src={animal.image} alt={animal.name}></img>
                        <p>Name: <span>{animal.name}</span></p>
                        <p>Description: {animal.description}</p>
                        <div id="button">
                            <p id= "price">Price: <span>{animal.price}</span></p>
                            <button>Order now</button>
                        </div>
                    </li>
                  ))}
                </ul>
            </div>
        </>
    )
}

export default Store