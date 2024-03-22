import React from "react";
import NavBar from "../../Components/NavBar";
import BookHeader from "./BookHeader";
import BookCard from "./BookCard";

export default function BookPage() {
    return (
        <div>
            <NavBar/>
            <BookHeader/>
            <h1>Book an Appointment with us</h1>
            <BookCard/>
        </div>
    )
    
}