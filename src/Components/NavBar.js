import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar--left">
                <h1>Duct Cleaning</h1>
            </div>
            <div className="navbar--mid">
                <h6><Link to='/' className="link-nav">HOME</Link></h6>
                <h6>ABOUT</h6>
                <h6>CONTACT</h6>
                <h6> <Link to='/Services' className="link-nav">SERVICES</Link></h6>
                <h6>PRICING</h6>
            </div>
            <div className="book-div">
                <Link to='/Book' className="book">BOOK NOW</Link>
            </div>
        </div>
    )
}