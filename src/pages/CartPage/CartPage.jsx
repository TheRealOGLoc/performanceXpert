import React, { useContext, useState } from "react";
import { CartContext } from "../App/CartContext";
import CartPageCommodity from "../../components/CartPageCommodity/CartPageCommodity.tsx";
import { useEffect } from "react";
import { getItemLocalStorage } from "../../utilities/cart-service.js";

export default function CartPage() {
    const {cart, setCart} = useContext(CartContext)
    
    const [localCart, setLocalCart] = useState([])
    useEffect(() => {
        setLocalCart(getItemLocalStorage())
    }, [])

    return (
        <div style={{marginTop:"500px"}} >
            {localCart.map((item, index) => <CartPageCommodity id={item.id} quantity={item.quantity} index={index} key={index} />)}
        </div>
    )
}
