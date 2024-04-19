import React from "react"
import "./CommodityPageSearch.css"

export default function CommodityPageSearch({setFilterToDefault, search, searching, setSearching, handleSearch, searchItems }) {

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearching(search)
        searchItems()
        setFilterToDefault()
    }

    return (
        <div>
            <div className="commoditypage-search">
                <form method="POST" className="commoditypage-search-form" onSubmit={handleSubmit} >
                    <input type="text" placeholder="Search by Name" className="commoditypage-search-input" onChange={handleSearch} />
                    <input type="submit" className="commoditypage-search-btn" name="↵" value={"↵"} />
                </form>

            </div>
            <div>
                {searching === "" ? <div></div> : <div>Search for: {searching}</div>}
            </div>
        </div>

    )
}