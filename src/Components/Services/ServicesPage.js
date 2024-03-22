import React from "react";
import NavBar from '../NavBar';
import ServicesHeader from "./ServicesHeader";
import ServiceCard from "./ServicesCard";
import Footer from '../../Components/Footer';

export default function ServicesPage() {
    return(
        <div className="main">
            <NavBar/>
            <ServicesHeader/>
            <ServiceCard/>
            <Footer/>
        </div>
    )
}