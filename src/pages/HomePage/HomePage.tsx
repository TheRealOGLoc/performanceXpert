import React from "react";
import backgroundImage from "../../images/homepage-evo.jpg"
import "./HomePage.css"

export default function HomePage() {
    return (
        <div className="homepage" >
            <img src={backgroundImage} alt="Background" className="homepage-background-evo"/>
            <div className="homepage-build-text-wrapper">
                <div className="empty-div"></div>
                <div className="homepage-build-text" >Build Your Car in Here</div>
                <div className="empty-div"></div>
            </div>
        </div>
    )
}