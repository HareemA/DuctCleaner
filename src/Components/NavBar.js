import React from "react";
import { Link } from "react-router-dom";
import logo from '../Images/Logo.png';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar--left">
                <img src={logo} className="logo"/>
                <h1>GTA Duct Cleaning</h1>
            </div>
            <div className="navbar--mid">
                <h6><Link to='/' className="link-nav">HOME</Link></h6>
                <h6>ABOUT</h6>
                <h6><Link to='/Contact' className="link-nav section--heading">CONTACT</Link></h6>
                <h6> <Link to='/Services' className="link-nav">SERVICES</Link></h6>
                <h6> <Link to='/Price' className="link-nav">PRICING</Link></h6>
            </div>
            <div className="book-div">
                <Link to='/Book' className="book">BOOK NOW</Link>
            </div>
        </div>
    )
}