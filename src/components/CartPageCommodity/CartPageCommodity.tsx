import React, { useState, useEffect, useRef } from "react";
import { findCommodity } from "../../utilities/data-service";
import { updateQuantityLocalStorage, removeCertainLocalStorage } from "../../utilities/cart-service";
import "./CartPageCommodity.css"

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
        <div className="cpc-container">
            <img src={commodity.url} className="cpc-img img-fluid" />

            <div className="cpc-middle" >

                    <div className="cpc-name">{commodity.name}</div>
                    <div className="cpc-sku">SKU: {commodity.SKU}</div>
                    <div className="cpc-quantity" >
                        <button onClick={handleMinus} className="cpc-quantity-button" >-</button>
                        <div>{itemQuantity}</div>
                        <button onClick={handleAdd} className="cpc-quantity-button" >+</button>
                    </div>


            </div>
            <div className="cpc-right" >
                <button onClick={handleDelete} className="cpc-delete" >X</button>
                <div className="cpc-price" >$ {commodity.price}</div>
            </div>
        </div>
    );
}
