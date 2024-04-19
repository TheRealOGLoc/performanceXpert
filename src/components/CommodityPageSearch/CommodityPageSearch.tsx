import React from "react"
import { useState } from "react"
import "./CommodityPageSearch.css"

export default function CommodityPageSearch() {

    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="commoditypage-search">
                <form method="POST" className="commoditypage-search-form" onSubmit={handleSubmit} >
                    <input type="text" placeholder="Search by Brand, Part, or Name" className="commoditypage-search-input" onChange={handleSearch} />
                    <input type="submit" className="commoditypage-search-btn" name="↵" value={"↵"} />
                </form>
            </div>
    )
}