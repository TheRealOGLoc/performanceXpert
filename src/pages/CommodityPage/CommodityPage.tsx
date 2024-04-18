import React from "react"
import { useState, useEffect } from "react"
import {getCommodities} from "../../utilities/data-service"
import CommodityPageFilter from "../../components/CommodityPageFilter/CommodityPageFilter.tsx"

export default function AllCommodityPage({ parameters }) {

    const [items, setItems] = useState([])

    useEffect(() => {
        async function getAllItems() {
            const allItems = await getCommodities()
            setItems(allItems)
        }
        getAllItems()
    }, [])

    return (
        <div>
            <CommodityPageFilter/>
        </div>
    )
}