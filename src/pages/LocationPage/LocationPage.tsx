import React from "react";
import LocationMap from "../../components/LocationMap/LocationMap.jsx";
import LocationList from "../../components/LocationList/LocationList.tsx";
import { getLocations } from "../../utilities/data-service.js"
import { useState, useEffect } from "react";
import "./LocationPage.css"

export default function LocationPage() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    async function getAll() {
      const allLocations = await getLocations()
      setLocations(allLocations)
    }
    getAll()
  }, [])

  return (
    <div>
      <h2 className="lp-title" >Find Our Partner Factories</h2>
      <div className="container lp-container">
        <div className="row">
          <div className="col-md">
            <LocationList locations={locations} />
          </div>
          <div className="col-md">
            <LocationMap />
          </div>
        </div>
      </div>
    </div>

  )
}
