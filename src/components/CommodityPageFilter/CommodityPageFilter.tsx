import React from "react"
import { getBrands, getParts } from "../../utilities/data-service"
import { useState, useEffect } from "react"
import CommodityPageFilterSelect from "../CommodityPageFilterSelect/CommodityPageFilterSelect.tsx"

export default function CommodityPageFilter({filterBrand, filterPart, setFilterBrand, setFilterPart, filterItems}) {

    const [brands, setBrands] = useState([])
    const [parts, setParts] = useState([])
    const [showBrands, setShowBrands] = useState<boolean>(false)
    const [showParts, setShowParts] = useState<boolean>(false)

    useEffect(() => {
        async function getBrandsParts() {
            const allBrands = await getBrands()
            const allParts = await getParts()
            setBrands(allBrands)
            setParts(allParts)
        }
        getBrandsParts()
    }, [])

    const showBrandSelections = () => {
        setShowBrands(!showBrands)
    }

    const showPartSelections = () => {
        setShowParts(!showParts)
    }

    const updateFilterBrand = (value) => {
        if (filterBrand[value] === null ) {
            setFilterBrand({...filterBrand, [value]: `${value}`})
        } else {
            setFilterBrand({...filterBrand, [value]: null})
        }
    }

    const updateFilterPart = (value) => {
        if (filterPart[value] === null ) {
            setFilterPart({...filterPart, [value]: `${value}`})
        } else {
            setFilterPart({...filterPart, [value]: null})
        }
    }

    const handleFilter = () => {
        filterItems()
    }

    return (
        <div>
            <button onClick={showBrandSelections} >Brands</button>
            { showBrands ? <div>
                {brands.map((brand, index) => <CommodityPageFilterSelect updateFilterBrand={updateFilterBrand} condition={filterBrand[brand.name]} name={brand.name} key={index} />)}
            </div> : <div></div> }
            

            <button onClick={showPartSelections} >Parts</button>
            { showParts ? <div>
                {parts.map((part, index) => <CommodityPageFilterSelect updateFilterPart={updateFilterPart} condition={filterPart[part.name]} name={part.name} key={index} />)}
            </div> : <div></div> }
            <button onClick={handleFilter} >Set Filter</button>
        </div>
    )
}