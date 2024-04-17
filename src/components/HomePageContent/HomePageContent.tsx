import React from "react"
import backgroundImage from "../../images/homepage-evo.jpg"
import "./HomePageContent.css"
import { getBrands } from "../../utilities/data-service"
import HomePageBrandLabel from "../HomePageBrandLabel/HomePageBrandLabel.tsx"
import { useState, useEffect } from "react"

export default function HomePageContent() {

    const [brands, setBrands] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        async function getAllBrands() {
            let allBrands = await getBrands()
            const brands = allBrands.slice(0, 8)
            setBrands(brands)
        }
        getAllBrands()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="homepage" >
            <div>
                <img src={backgroundImage} alt="Background" className="homepage-background-evo" />
            </div>
            <div className="homepage-build-text-wrapper">
                <div className="empty-div"></div>
                <div className="homepage-build-text" >Build Your Car in Here</div>
                <div className="empty-div"></div>
            </div>
            <div className="homepage-search">
                <form method="POST" className="homepage-search-form" onSubmit={handleSubmit} >
                    <input type="text" placeholder="Search by Brand, Part, or Name" className="homepage-search-input" onChange={handleSearch} />
                    <input type="submit" className="homepage-search-btn" name="↵" value={"↵"} />
                </form>
            </div>
            <div className="homepage-label">
                <div className="homepage-label-text" >Browse by Brand</div>
                <div className="homepage-label-wrapper" >
                    {brands.map((brand: any, index: number) => <HomePageBrandLabel name={brand.name} url={brand.url} key={index} />)}
                </div>
            </div>
        </div>
    )
}