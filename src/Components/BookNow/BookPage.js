import React from "react";
import NavBar from "../../Components/NavBar";
import BookHeader from "./BookHeader";
import BookCard from "./BookCard";
import Footer from '../../Components/Footer';

export default function BookPage() {
    return (
        <div>
            <NavBar/>
            <BookHeader/>
            <h1 className="servives-heading">Book an Appointment with us</h1>
            <BookCard/>
            <Footer/>
        </div>
    )
    
}