import React from "react"
import { useState, useEffect } from "react"
import {getCommodities, searchCommodities, filterCommodities} from "../../utilities/data-service"
import CommodityPageFilter from "../../components/CommodityPageFilter/CommodityPageFilter.tsx"
import CommodityPageSearch from "../../components/CommodityPageSearch/CommodityPageSearch.tsx"
import CommodityPageItemList from "../../components/CommodityPageItemList/CommodityPageItemList.tsx"

export default function CommodityPage({ parameters }) {

    const [items, setItems] = useState([])
    const [search, setSearch] = useState("")
    const [searching, setSearching] = useState("")

    const [filterBrand, setFilterBrand] = useState<{}>({
        GReddy: null,
        Brembo: null,
        HKS: null,
        Mugen: null,
        Nismo: null,
        STI: null,
        TRD: null,
        YOKOHAMA: null
    })

    const [filterPart, setFilterPart] = useState<{}>({
        Engine: null,
        Turbo: null,
        Widebody: null,
        Rim: null,
        Break: null,
        Other: null
    })

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        async function getAllItems() {
            const allItems = await getCommodities()
            setItems(allItems)
        }
        getAllItems()
    }, [])

    const searchItems = async () => {
        const newItems = await searchCommodities({searching: search})
        setItems(newItems)
    }

    const filterItems = async () => {
        const newItems = await filterCommodities({searching: searching, 
            brands: filterBrand,
            parts: filterPart
        })
        setItems(newItems)
    }

    const setFilterToDefault = () => {
        for (const brand in filterBrand) {
            filterBrand[brand] = null
        }
        for (const part in filterPart) {
            filterPart[part] = null
        }
    }

    return (
        <div>
            <CommodityPageSearch setFilterToDefault={setFilterToDefault} search={search} searching={searching} setSearching={setSearching} handleSearch={handleSearch} searchItems={searchItems} />
            <CommodityPageFilter filterBrand={filterBrand} filterPart={filterPart} setFilterBrand={setFilterBrand} setFilterPart={setFilterPart} filterItems={filterItems} />
            <CommodityPageItemList items={items} />
        </div>
    )
}