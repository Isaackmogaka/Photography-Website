import React, { useEffect, useState } from "react";
import Cart from "./Cart";

function Store() {
const [animals, setAnimal] = useState([]);
const [cart, setCart] = useState([])

useEffect(() => {
    fetch("http://localhost:8001/animals")
      .then(response => response.json())
      .then(data => setAnimal(data))
      .catch(error => {
        console.error('error fetching data:', error);
      });
  }, []);

function addToCart(animal){
setCart([...cart, animal])
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
            <Cart cart = {cart}/>
        </>
    )
}

export default Store