import React from "react"
import LocationListItem from "../LocationListItems/LocationListItems.tsx"
import "./LocationList.css"

export default function LocationList({locations}) {
    return (
        <div className="ll-container" >
            {locations.map((location, index) => <LocationListItem location={location} key={index}/>)}
        </div>
    )
}