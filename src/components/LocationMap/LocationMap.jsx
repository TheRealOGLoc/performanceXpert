import React from "react"
import GoogleMapReact from "google-map-react"
import { useState, useEffect } from "react";
import LocationMapLabel from "../LocationMapLabel/LocationMapLabel";
import { getLocations } from "../../utilities/data-service";

export default function LocationMap() {

  const [locations, setLocations] = useState([])

  useEffect(() => {
    async function getAll() {
      const allLocations = await getLocations()
      setLocations(allLocations)
    }
    getAll()
  }, [])

  const distanceToMouse = (pt, mp) => {
    if (pt && mp) {
      return Math.sqrt(
        (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
      );
    }
  };

  return (
    // Important! Always set the container height explicitly
    <div className="lm-container" style={{ height: '500px', width: '100%', position: 'relative', minWidth:"440px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          // remove the key if you want to fork
          key: process.env.REACT_APP_GOOGLE_MAP_API,
          language: "en",
          region: "US"
        }}
        defaultCenter={{ lat: -27.469770, lng: 153.025131 }}
        defaultZoom={12}
        distanceToMouse={distanceToMouse}
      >
        {locations.map((location, index) => <LocationMapLabel lat={location.lat} lng={location.lng} location={location} key={index} />)}
      </GoogleMapReact>
    </div>
  );
}