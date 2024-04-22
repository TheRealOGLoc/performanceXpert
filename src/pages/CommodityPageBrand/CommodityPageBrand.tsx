import React from "react"
import CommodityPageItemList from "../../components/CommodityPageItemList/CommodityPageItemList.tsx"
import { useState, useEffect } from "react"
import { findBrandCommodity } from "../../utilities/data-service"
import { useParams } from "react-router-dom"
import "./CommodityPageBrand.css"

export default function CommodityPageBrand() {

    const {brand} = useParams()

    const [items, setItems] = useState([])

    

    useEffect(() => {
        async function getBrandItems() {
            const brandItems = await findBrandCommodity({brand: brand})
            setItems(brandItems)
        }
        getBrandItems()
    }, [])

    return (
        <div className="container cpb-container" >
            <CommodityPageItemList items={items} />
        </div>
        
    )
}