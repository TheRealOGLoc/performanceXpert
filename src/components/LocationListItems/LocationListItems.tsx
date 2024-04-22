import React from "react"
import "./LocationListItems.css"

export default function LocationListItem({ location }) {
    const { title, description, lat, lng, url, address, rating } = location
    return (
        <div className="lli-container" >
            <img className="lli-img" src={url} />
            <div className="lli-text">
                <div className="lli-title" >{title}</div>
                <div className="lli-address">{address}</div>
                <div className="lli-description">{description}</div>
                <div className="lli-rating">Rating: {rating}</div>
            </div>
        </div>
    )
}