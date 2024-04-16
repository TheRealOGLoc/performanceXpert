import React from "react"
import GoogleMapReact from "google-map-react"
import { useState, useEffect } from "react";
import LocationMapLabel from "../LocationMapLabel/LocationMapLabel";


export default function LocationMap() {

  const [labels, setLabels] = useState([])

  const distanceToMouse = (pt, mp) => {
    if (pt && mp) {
      return Math.sqrt(
        (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
      );
    }
  };
 
  const points = [
    { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
    { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
    { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 }
  ];

  useEffect(()=> {
    setLabels(points.map(({ lat, lng, id, title }) => {
      return (
        <LocationMapLabel key={id} lat={lat} lng={lng} text={id} tooltip={title} />
      );
    }))  
  }, [])

  
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '500px', width: '100vw', position: 'relative' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          // remove the key if you want to fork
          key: process.env.REACT_APP_GOOGLE_MAP_API,
          language: "en",
          region: "US"
        }}
        defaultCenter={{ lat: 51.506, lng: -0.169 }}
        defaultZoom={15}
        distanceToMouse={distanceToMouse}
      >
        {labels}
      </GoogleMapReact>
    </div>
  );
}