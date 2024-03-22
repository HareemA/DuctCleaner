import React from "react";
import service from '../../Images/men-working-with-equipment-full-shot.jpg';

export default function ServicesHeader() {
    return(
        <div> 
            <img src={service} className="servicesImg"/>
            <h1 className="servives-heading">Our Services</h1>
        </div>
    )
}