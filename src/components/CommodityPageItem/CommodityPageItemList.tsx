import React from "react"

export default function CommodityPageItem({item}) {
    return (
        <div>
            <a href={`/${item._id}`}>
                <img src={item.url} alt="" />
                <div>{item.name}</div>
                <div>$ {item.price}</div>
            </a>
        </div>
    )
}