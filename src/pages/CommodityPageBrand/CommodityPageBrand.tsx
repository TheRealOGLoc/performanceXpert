import React from "react"
import CommodityPageItemList from "../../components/CommodityPageItemList/CommodityPageItemList.tsx"
import { useState, useEffect } from "react"
import { findBrandCommodity, findBrand } from "../../utilities/data-service"
import { useParams } from "react-router-dom"
import "./CommodityPageBrand.css"

export default function CommodityPageBrand() {

    const {brand} = useParams()

    const [items, setItems] = useState([])
    const [targetBrand, setTargetBrand] = useState({})

    useEffect(() => {
        async function getBrandItems() {
            const brandItems = await findBrandCommodity({brand: brand})
            const theBrand = await findBrand({brand: brand})
            setItems(brandItems)
            setTargetBrand(theBrand[0])
        }
        getBrandItems()
    }, [])

    return (
        <div className="container cpb-container" >
            <div className="cpb-banner" >
                <img className="cpb-banner-img" src={targetBrand.url}/>
                <div className="cpb-banner-description" >{targetBrand.description}</div>
            </div>
            <div className="cpb-banner-divider" ></div>
            <div className="cpb-banner-feature" >Featured Products: </div>
            <CommodityPageItemList items={items} />
        </div>
        
    )
}