import React from "react";
import "./LocationMapLabel.css"
import { useState } from "react";

const LocationMapLabel = ({ location }) => {

    const [closeLabel, setCloseLabel] = useState(true)

    const { title, description, rating, url } = location

    const handleOnClick = () => {
        setCloseLabel(!closeLabel)
    }


    return (
        <div className="map-label-wrapper">
            <div className="map-label" style={closeLabel? {display: "block"}: {display:"none"}} >
                <button className="map-label-close-btn" onClick={handleOnClick} >✖</button>
                <img src={url} className="map-label-img" />
                <div className="map-label-text-wrapper">
                    <div className="map-label-title" >{title}</div>
                    <div className="map-label-description">{description}</div>
                    <div className="map-label-rating">Rating: {rating}</div>
                </div>
            </div>
            <div>
                <button className="map-label-btn" onClick={handleOnClick} >▼</button>
            </div>
        </div>
    );
};


export default LocationMapLabel;
