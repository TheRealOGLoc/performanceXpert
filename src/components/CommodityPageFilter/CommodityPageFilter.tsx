import React from "react"
import { getBrands, getParts } from "../../utilities/data-service"
import { useState, useEffect } from "react"
import CommodityPageFilterSelect from "../CommodityPageFilterSelect/CommodityPageFilterSelect.tsx"

export default function CommodityPageFilter() {

    const [brands, setBrands] = useState([])
    const [parts, setParts] = useState([])
    const [showBrands, setShowBrands] = useState<boolean>(false)
    const [showParts, setShowParts] = useState<boolean>(false)

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

    return (
        <div>
            <button onClick={showBrandSelections} >Brands</button>
            { showBrands ? <div>
                {brands.map((brand, index) => <CommodityPageFilterSelect updateFilterBrand={updateFilterBrand} name={brand.name} key={index} />)}
            </div> : <div></div> }
            

            <button onClick={showPartSelections} >Parts</button>
            { showParts ? <div>
                {parts.map((part, index) => <CommodityPageFilterSelect updateFilterPart={updateFilterPart} name={part.name} key={index} />)}
            </div> : <div></div> }
            <button>Set Filter</button>
        </div>
    )
}