import React from "react"
import GoogleMapReact from "google-map-react"
import "./LocationMap.css"

export default function LocationMap() {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 5
      };
    
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '500px', width: '500px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
          </GoogleMapReact>
        </div>
      );
}