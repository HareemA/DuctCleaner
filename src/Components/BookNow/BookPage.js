import React from "react";
import NavBar from "../../Components/NavBar";
import BookHeader from "./BookHeader";
import BookCard from "./BookCard";
import Footer from '../../Components/Footer';
import Testimonials from "../Testimonials";

export default function BookPage() {
    return (
        <div>
            <NavBar/>
            
            {/* <h1 className="book-heading">Book an Appointment with us</h1> */}
            <div className="book-card-div-bg">
            <BookHeader/>
            <BookCard/>
            </div>
            <Testimonials/>
            <Footer/>
        </div>
    )
    
}