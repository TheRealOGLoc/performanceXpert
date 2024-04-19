import React from "react"

export default function CommodityPageSort({setSort}) {

    const handleSelection = (e) => {
        setSort(e.target.value)
    }
    
    return (
        <div>
            <select name="sort" onChange={handleSelection} >
                <option value={0} >Default</option>
                <option value={-1} >Price high to low</option>
                <option value={1} >Price low to high</option>
            </select>
        </div>
    )
}