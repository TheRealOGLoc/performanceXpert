import React from "react"
import { useState, useEffect } from "react"
import {getCommodities} from "../../utilities/data-service"
import CommodityPageFilter from "../../components/CommodityPageFilter/CommodityPageFilter.tsx"
import CommodityPageSearch from "../../components/CommodityPageSearch/CommodityPageSearch.tsx"

export default function CommodityPage({ parameters }) {

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
            <CommodityPageSearch/>
            <CommodityPageFilter/>
        </div>
    )
}