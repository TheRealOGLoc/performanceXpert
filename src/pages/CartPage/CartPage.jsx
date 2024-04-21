import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../App/CartContext";
import CartPageCommodity from "../../components/CartPageCommodity/CartPageCommodity.tsx";
import { getItemLocalStorage } from "../../utilities/cart-service.js";

export default function CartPage() {
    const { cart, setCart } = useContext(CartContext);
    const [localCart, setLocalCart] = useState(getItemLocalStorage());

    const updatePriceList = (id, quantity) => {
        const updatedPrices = localCart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: quantity };
            }
            return item;
        });
        setLocalCart(updatedPrices);
    };

    const removePriceItem = (id) => {
        const updatedPrices = localCart.filter((item) => item.id !== id);
        setLocalCart(updatedPrices);
    };
    

    return (
        <>
            <div style={{ marginTop: "200px" }} >
                {localCart.map((item, index) => (
                    <CartPageCommodity
                        id={item.id}
                        quantity={item.quantity}
                        updatePriceList={updatePriceList}
                        removePriceItem={removePriceItem}
                        key={index}
                    />
                ))}
            </div>
        </>
    );
}
