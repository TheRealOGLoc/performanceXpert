import React from "react"
import "./HomePageBrandLabel.css"

export default function HomePageBrandLabel({ name, url }) {
    return (
        <a href={`/item/brand/${name}`}>
            <div className="brand-label" >
                <div className="brand-label-name" >{name}</div>
                <img src={url} className="brand-label-img" />
            </div>
        </a>
    )
}
