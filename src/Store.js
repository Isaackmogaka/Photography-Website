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
            <div>
                <div>
                  {animals.map((animal) => (
                    <div key={animal.name}>
                        <img src={animal.image} alt={animal.name} width="200px"></img>
                        <p>Name: {animal.name}</p>
                        <p>Description: {animal.description}</p>
                        <p>Price: {animal.price}</p>
                        <button>Order now</button>
                    </div>
                  ))}
                </div>
            </div>
        </>
    )
}

export default Store