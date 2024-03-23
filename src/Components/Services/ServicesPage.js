import React from "react";
import NavBar from '../NavBar';
import ServicesHeader from "./ServicesHeader";
import ServiceCard from "./ServicesCard";
import Footer from '../../Components/Footer';
import ServicesTypes from "./ServicesTypes";

export default function ServicesPage() {
    return(
        <div className="main">
            <NavBar/>
            <ServicesHeader/>
            <h3 className="services-h3">We PROVDE SERVICES FOR BOTH YOUR HOMES AND OFFICES</h3>
            <ServicesTypes/>
            <h3 className="services-h3">KNOW MORE ABOUT ALL THE SERVICES</h3>
            <ServiceCard/>
            <Footer/>
        </div>
    )
}