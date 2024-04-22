import React from "react"
import "./CommodityPageSort.css"

export default function CommodityPageSort({ setSort }) {

    const handleSelection = (e) => {
        setSort(e.target.value)
    }

    return (
        <div className="cps-container" >
            <select className="form-select" style={{borderRadius: "0", height: "54px"}} aria-label="Default select example" onChange={handleSelection} >
                <option value={0} >Default</option>
                <option value={-1} >Price high to low</option>
                <option value={1} >Price low to high</option>
            </select>
        </div>
    )
}