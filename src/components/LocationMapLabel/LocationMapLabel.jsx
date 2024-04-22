import React from "react";
import "./LocationMapLabel.css"
import { useState } from "react";
import marker from "../../images/marker.png"

const LocationMapLabel = ({ location }) => {

    const [closeLabel, setCloseLabel] = useState(false)

    const { title, address, rating, url } = location

    const handleOnClick = () => {
        setCloseLabel(!closeLabel)
    }


    return (
        <div className="map-label-wrapper">
                <div className="map-label" style={closeLabel ? { display: "block" } : { display: "none" }} >
                    <button className="map-label-close-btn" onClick={handleOnClick} >✖</button>
                    <img src={url} className="map-label-img" />
                    <div className="map-label-text-wrapper">
                        <div className="map-label-title" >{title}</div>
                        <div className="map-label-description">{address}</div>
                        <div className="map-label-rating">Rating: {rating}</div>
                    </div>
                </div>
                <div>
                    <button className="map-label-btn" onClick={handleOnClick} ><img src={marker} className="map-label-open" /></button>
                </div>
        </div>
    );
};


export default LocationMapLabel;
