import React, { useEffect, useState } from "react";
// import Cart from "./Cart";

function Store() {
const [animals, setAnimals] = useState([]);
const [cart, setCart] = useState([])
// const [selectedCart, setSelectedCart] = useState([])

useEffect(() => {
    fetch("https://ontrack-server.onrender.com/animals")
      .then(response => response.json())
      .then(data => setAnimals(data))
      .catch(error => {
        console.error('error fetching data:', error);
      });
  }, []);


function addToCart(animal){
setCart([...cart, animal])
// setSelectedCart(animal)
}
    return (
        <>
            <button>Items in Cart ({cart.length})</button>
            <div id="container">
                <ul id="card">
                  {animals.map((animal) => (
                    <li key={animal.name}>
                        <img src={animal.image} alt={animal.name}></img>
                        <p>Name: <span>{animal.name}</span></p>
                        <p>Description: {animal.description}</p>
                        <div id="button">
                            <p id= "price">Price: <span>{animal.price}</span></p>
                            <button onClick={() => addToCart(animal)}>Add to cart</button>
                        </div>
                    </li>
                  ))}
                </ul>
            </div>
        </>
    )
}

export default Store