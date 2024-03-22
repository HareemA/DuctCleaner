import React from "react";
import headerpic from '../../Images/Contact-us.jpg';

export default function ContactHeader() {
    return(
        <div> 
            <img src={headerpic} className="servicesImg"/>
            <h1 className="services-heading">Contact Us</h1>
        </div>
    )
}