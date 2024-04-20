import React from "react"
import { findCommodity } from "../../utilities/data-service"
import { useState, useEffect } from "react"
import { updateQuantityLocalStorage } from "../../utilities/cart-service"

export default function CartPageCommodity({ id, quantity, index }) {

    const [commodity, setCommodity] = useState({})
    const [itemQuantity, setItemQuantity] = useState(0)

    useEffect(() => {
        async function findCommodityById() {
            const theCommodity = await findCommodity({ id: id })
            setCommodity(theCommodity)
        }
        findCommodityById()
        setItemQuantity(quantity)
    }, [])

    useEffect(() => {
        updateQuantityLocalStorage(id, itemQuantity)
    }, [itemQuantity])

    const handleAdd = () => {
        if (itemQuantity < commodity.stock) {
            setItemQuantity(itemQuantity + 1)
        }
    }

    const handleMinus = () => {
        if (itemQuantity !== 1) {
            setItemQuantity(itemQuantity - 1)
        }
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
                <button>Delete</button>
            </div>
        </div>
    )
}