import React, {useState} from "react";
import Store from "./Store"
import Cart from "./Cart"

function Toogle(){

const [isCart, setIsCart] = useState(false);

function tooglePage(){
    setIsCart(!isCart)
}
    return(
        <>
        <button onClick={tooglePage}>
            {isCart ? "View products":"Go to cart"}
        </button>
        {isCart ? <Cart/> : <Store/>}
        </>
    )
}

export default Toogle