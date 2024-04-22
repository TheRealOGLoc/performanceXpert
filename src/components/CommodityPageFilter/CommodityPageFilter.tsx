import React from "react"
import { getBrands, getParts } from "../../utilities/data-service"
import { useState, useEffect } from "react"
import CommodityPageFilterSelect from "../CommodityPageFilterSelect/CommodityPageFilterSelect.tsx"
import "./CommodityPageFilter.css"

export default function CommodityPageFilter({ filterBrand, filterPart, setFilterBrand, setFilterPart, filterItems }) {

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
        if (filterBrand[value] === null) {
            setFilterBrand({ ...filterBrand, [value]: `${value}` })
        } else {
            setFilterBrand({ ...filterBrand, [value]: null })
        }
    }

    const updateFilterPart = (value) => {
        if (filterPart[value] === null) {
            setFilterPart({ ...filterPart, [value]: `${value}` })
        } else {
            setFilterPart({ ...filterPart, [value]: null })
        }
    }

    const handleFilter = () => {
        filterItems()
    }

    return (
        <div className="cpf-container" >
            <div className="accordion accordion-flush cpf-filters " id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Brands
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                        {brands.map((brand, index) => <CommodityPageFilterSelect updateFilterBrand={updateFilterBrand} condition={filterBrand[brand.name]} name={brand.name} key={index} />)}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Parts
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                        {parts.map((part, index) => <CommodityPageFilterSelect updateFilterPart={updateFilterPart} condition={filterPart[part.name]} name={part.name} key={index} />)}
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleFilter} >Set Filter</button>
        </div>
    )
}