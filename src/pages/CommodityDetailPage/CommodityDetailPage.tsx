import React from "react"
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { findCommodity } from "../../utilities/data-service"
import { CartContext } from "../App/CartContext"
import { addItemToLocalStorage } from "../../utilities/cart-service"
import "./CommodityDetailPage.css"

export default function CommodityDetailPage() {
    const { id } = useParams()
    const [detail, setDetail] = useState({})
    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(0)
    const [added, setAdded] = useState(false)
    const { cart, setCart } = useContext(CartContext)

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
        setAdded(true)
    }

    return (
        <div className="container cdp-container " >
            <div className="row" >
                <div className="col">
                <img className="cdp-img" src={detail.url} alt={detail.url}  />
                </div>
                
                <div className="col cdp-info ">
                    <div className="cdp-name" >{detail.name}</div>
                    <br />
                    <div className="cdp-SKU" >SKU: {detail.SKU}</div>
                    <div className="cdp-price" >Price: ${detail.price}</div>
                    <div className="cdp-ship" >
                        <div className="cdp-circle" ></div>
                        <div>In stock, ready to ship</div>
                    </div>
                    <div className="cdp-quantity" >
                        <div>Quantity: </div>
                        <div className="cdp-quantity-control" >
                            <button onClick={handleMinus} className="cdp-quantity-btn" >-</button>
                            <div>{count}</div>
                            <button onClick={handleAdd} className="cdp-quantity-btn" >+</button>
                        </div>
                    </div>
                    <button onClick={handleAddToCart} className="cdp-cart-btn" >Add to cart</button>
                    {added ? <div>Item added to your cart!</div> : "" }
                </div>
            </div>
            <div className="row container-bottom " >
                <div className="cdp-description" >Description </div>
                <div className="cdp-description-text" >{detail.description}</div>
            </div>
        </div>
    )
}