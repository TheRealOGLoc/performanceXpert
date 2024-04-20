import React from "react"
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { findCommodity } from "../../utilities/data-service"
import { CartContext } from "../App/CartContext"
import { getUser } from "../../utilities/users-service"
import { addItemToLocalStorage } from "../../utilities/cart-service"

export default function CommodityDetailPage() {
    const { id } = useParams()
    const [detail, setDetail] = useState({})
    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(0)
    const {cart, setCart} = useContext(CartContext)

    useEffect(() => {
        async function getDetail() {
            const commodityDetail = await findCommodity({ id: id })
            setDetail(commodityDetail)
            setStock(commodityDetail.stock)
        }
        getDetail()
    }, [id])

    const handleMinus = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleAdd = () => {
        if (count !== stock) {
            setCount(count + 1)
        }
    }

    const handleAddToCart = () => {
        const cartCopy = [...cart];
        cartCopy.push({
            id: id,
            quantity: count,
            
        });
        setCart(cartCopy);
        addItemToLocalStorage({
            id: id,
            quantity: count,
            price: detail.price
        })
    }

    return (
        <div>
            <img src={detail.url} alt={detail.url} />
            <div>{detail.name}</div>
            <div>Price: ${detail.price}</div>
            <div>SKU: {detail.SKU}</div>
            <div>
                <div>Quantity: </div>
                <div>
                    <button onClick={handleMinus} >-</button>
                    <div>{count}</div>
                    <button onClick={handleAdd} >+</button>
                </div>
            </div>
            <button onClick={handleAddToCart} >Add to cart</button>

            <div>Description: </div>
            <div>{detail.description}</div>
        </div>
    )
}