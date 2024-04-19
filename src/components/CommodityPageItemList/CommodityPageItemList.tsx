import React from "react"
import CommodityPageItem from "../CommodityPageItem/CommodityPageItemList.tsx"

export default function CommodityPageItemList({items}) {

    return (
        <div>
            {items.map((item, index) => <CommodityPageItem item={item} key={index} />)}
        </div>
    )
}