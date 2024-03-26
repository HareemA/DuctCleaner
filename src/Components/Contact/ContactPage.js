import React from "react";
import NavBar from '../NavBar';
import ContactHeader from "./ContactHeader";
import Footer from '../../Components/Footer';
import ContactForm from "./ContactForm";
import Testimonials from "../Testimonials";

export default function ContactPage() {
    return(
        <div className="main">
            <NavBar/>
            <ContactHeader/>
            <ContactForm/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}