import React from "react";
import service from '../../Images/slider-services-background.jpg';

export default function ServicesHeader() {
    return(
        <div> 
            <img src={service} className="servicesImg"/>
        </div>
    )
}