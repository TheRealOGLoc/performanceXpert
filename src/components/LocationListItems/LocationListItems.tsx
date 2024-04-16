import React from "react"

//
export default function LocationListItem({location}) {
    const {title, description, lat, lng, url, address, rating} = location
    return (
        <div>
            <img src={url}/>
            <div>{title}</div>
            <div>{description}</div>
            <div>{address}</div>
            <div>{rating}</div>
        </div>
    )
}