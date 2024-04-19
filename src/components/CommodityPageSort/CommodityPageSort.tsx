import React from "react"

export default function CommodityPageSort() {
    
    return (
        <div>
            <select name="sort">
                <option value="Default">Default</option>
                <option value="Price hight to low">Price high to low</option>
                <option value="Price low to high">Price low to high</option>
            </select>
        </div>
    )
}