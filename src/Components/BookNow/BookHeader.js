import React from "react";
import appointment from '../../Images/appointment.jpg';
import duct from '../../Images/duct.jpg';


export default function BookHeader() {
    return (
        <div>
            <img src={appointment} className="book-header-image"/>
            <h1 className="book-header-heading">Book An Appointment</h1>
        </div>
    )
    
}