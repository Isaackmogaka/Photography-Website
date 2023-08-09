import React from "react";

function Cart({cart}){
    return(
        <>
            <div id="container">
                <ul id="card">
                  {cart.map((animal) => (
                    <li key={animal.name}>
                        <img src={animal.image} alt={animal.name}></img>
                        <p>Name: <span>{animal.name}</span></p>
                        <p>Description: {animal.description}</p>
                        <div id="button">
                            <p id= "price">Price: <span>{animal.price}</span></p>
                        </div>
                    </li>
                  ))}
                </ul>
            </div>
        </>
    )
}
export default Cart