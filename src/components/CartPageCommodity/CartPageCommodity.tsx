import React, { useState, useEffect, useRef } from "react";
import { findCommodity } from "../../utilities/data-service";
import { updateQuantityLocalStorage, removeCertainLocalStorage } from "../../utilities/cart-service";

export default function CartPageCommodity({ id, quantity, updatePriceList, removePriceItem }) {
    const [commodity, setCommodity] = useState({});
    const [itemQuantity, setItemQuantity] = useState(0);
    const itemId = useRef(null)

    useEffect(() => {
        async function findCommodityById() {
            const theCommodity = await findCommodity({ id: id });
            setCommodity(theCommodity);
        }
        findCommodityById();
        itemId.current = id
        setItemQuantity(quantity);
    }, []);

    useEffect(() => {
        updateQuantityLocalStorage(id, itemQuantity);
        updatePriceList(id, itemQuantity)
    }, [itemQuantity]);

    const handleAdd = () => {
        if (itemQuantity < commodity.stock) {
            setItemQuantity(itemQuantity + 1);
        }
    };

    const handleMinus = () => {
        if (itemQuantity !== 1) {
            setItemQuantity(itemQuantity - 1);
        }
    };

    const handleDelete = () => {
        removePriceItem(id)
        removeCertainLocalStorage(id)
        
    }

    return (
        <div>
            <div>
                <img src={commodity.url} alt="" />
            </div>
            <div>
                <div>{commodity.name}</div>
                <div>{commodity.SKU}</div>
                <div>
                    <button onClick={handleMinus} >-</button>
                    <div>{itemQuantity}</div>
                    <button onClick={handleAdd} >+</button>
                </div>
            </div>
            <div>
                <div>$ {commodity.price}</div>
                <button onClick={handleDelete} >Delete</button>
            </div>
        </div>
    );
}
