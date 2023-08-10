import React from "react";

function Cart(){
    return(
        <>
            <div id="container">
                {/* <ul id="card">
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
                </ul> */}
                <h1>This is my cart</h1>
            </div>
        </>
    )
}
export default Cart