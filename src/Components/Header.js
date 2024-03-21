import React from "react";
import duct from '../Images/duct.jpg'

export default function Header() {
    const headertext1 = document.querySelector('.headertext1');
    const headertext2 = document.querySelector('.headertext2');

    const headertext1Position = headertext1.offsetHeight;
    headertext2.style.top = `calc(${headertext1Position}px + 70px)`;

    return (
        <div>
            <img src={duct} className="headerImg"></img>
            <div className="header-text">
                <h1 className="headertext1">Breathing Life into Clean Air: </h1>
                <h1 className="headertext2">Your Trusted Duct Cleaning Experts in Toronto</h1>
            </div>
            
        </div>
    )
}