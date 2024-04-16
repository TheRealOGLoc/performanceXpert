import React from "react";
import "./LocationMapLabel.css"

// const LocationMapLabel = ({ text, tooltip }) => {
//   return (
//     <div className="circle">
//       <span className="circleText" title={tooltip}>
//         {text}
//       </span>
//     </div>
//   );
// };

const LocationMapLabel = ({ location }) => {

    const { title, description, rating, url } = location

    return (
        <div className="map-label" >
            <img src={url} className="map-label-img" />
            <div className="map-label-text-wrapper">
                <div className="map-label-title" >{title}</div>
                <div className="map-label-description">{description}</div>
                <div className="map-label-rating">Rating: {rating}</div>
            </div>
        </div>

    );
};


export default LocationMapLabel;
