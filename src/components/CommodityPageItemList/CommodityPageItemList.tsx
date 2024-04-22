import React from "react"
import CommodityPageItem from "../CommodityPageItem/CommodityPageItem.tsx"

export default function CommodityPageItemList({ items }) {
    return (
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4" >
            {items.map((item, index) => <CommodityPageItem item={item} key={index} />)}
        </div>
    )
}