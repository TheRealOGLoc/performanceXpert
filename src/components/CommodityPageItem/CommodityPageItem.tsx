import React from "react"
import "./CommodityPageItem.css"

export default function CommodityPageItem({ item }) {
    return (
        <div>
            <a href={`/commodities/${item._id}`}>
                <div className="col">
                    <div className="card cpi-card">
                        <img src={item.url} className="card-img-top cpi-img" alt="..." />
                        <div className="card-body cpi-body ">
                            <div className="card-title cpi-name ">{item.name}</div>
                            <p className="card-text cpi-price ">$ {item.price}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}