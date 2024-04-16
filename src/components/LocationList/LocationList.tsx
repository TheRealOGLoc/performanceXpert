import React from "react"
import LocationListItem from "../LocationListItems/LocationListItems.tsx"

export default function LocationList({locations}) {
    return (
        <div>
            {locations.map((location, index) => <LocationListItem location={location} key={index}/>)}
        </div>
    )
}