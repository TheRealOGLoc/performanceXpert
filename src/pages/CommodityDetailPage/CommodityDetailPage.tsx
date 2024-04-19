import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { findCommodity } from "../../utilities/data-service"

export default function CommodityDetailPage() {
    const { id } = useParams()
    const [detail, setDetail] = useState({})
    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(0)

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
        if (count != stock) {
            setCount(count + 1)
        }
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
            <button>Add to cart</button>

            <div>Description: </div>
            <div>{detail.description}</div>
        </div>
    )
}