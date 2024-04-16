import React from "react";
import LocationMap from "../../components/LocationMap/LocationMap.jsx";
import LocationList from "../../components/LocationList/LocationList.tsx";
import {getLocations} from "../../utilities/data-service.js"
import { useState, useEffect } from "react";

export default function LocationPage() {
    const [locations, setLocations] = useState([])

    useEffect(()=>{
        async function getAll() {
          const allLocations = await getLocations()
          setLocations(allLocations)
        }
        getAll()
      }, [])

    return (
        <div>
            <LocationList locations={locations} />
            <LocationMap locations={locations}/>
        </div>
        
    )
}
