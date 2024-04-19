import React from "react"
import { useState, useEffect } from "react"
import {getCommodities, searchCommodities, filterCommodities} from "../../utilities/data-service"
import CommodityPageFilter from "../../components/CommodityPageFilter/CommodityPageFilter.tsx"
import CommodityPageSearch from "../../components/CommodityPageSearch/CommodityPageSearch.tsx"
import CommodityPageItemList from "../../components/CommodityPageItemList/CommodityPageItemList.tsx"
import CommodityPageSort from "../../components/CommodityPageSort/CommodityPageSort.tsx"

export default function CommodityPage({ parameters }) {

    const [items, setItems] = useState([])
    const [search, setSearch] = useState("")
    const [searching, setSearching] = useState("")
    const [sort, setSort] = useState(0)

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

    const searchItems = async () => {
        const newItems = await searchCommodities({searching: search})
        setItems(newItems)
    }

    const filterItems = async () => {
        const newItems = await filterCommodities({searching: searching, 
            brands: filterBrand,
            parts: filterPart,
            sort: sort
        })
        setItems(newItems)
    }

    useEffect(() => {
        async function getAllItems() {
            const allItems = await getCommodities()
            setItems(allItems)
        }
        getAllItems()
    }, [])

    useEffect(() => {
        async function sortItems() {
            await filterItems()
        }
        sortItems()
    }, [sort])

    

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
            <CommodityPageSort setSort={setSort} />
            <CommodityPageFilter filterBrand={filterBrand} filterPart={filterPart} setFilterBrand={setFilterBrand} setFilterPart={setFilterPart} filterItems={filterItems} />
            <CommodityPageItemList items={items} />
        </div>
    )
}