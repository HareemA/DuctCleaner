import React from "react";
import NavBar from '../NavBar';
import ServicesHeader from "./ServicesHeader";
import ServiceCard from "./ServicesCard";

export default function ServicesPage() {
    return(
        <div className="main">
            <NavBar/>
            <ServicesHeader/>
            <ServiceCard/>
        </div>
    )
}