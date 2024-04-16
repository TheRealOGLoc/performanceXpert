import React from "react";
import "./LocationMapLabel.css"

const LocationMapLabel = ({ text, tooltip }) => {
  return (
    <div className="circle">
      <span className="circleText" title={tooltip}>
        {text}
      </span>
    </div>
  );
};

export default LocationMapLabel;
