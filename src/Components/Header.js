import React from "react";
// import duct from '../Images/duct.jpg'
import duct from '../Images/3d-rendering-ventilation-system.jpg';

export default function Header() {
    

    return (
        <div>
            <img src={duct} className="headerImg"></img>
            {/* <div className="header-text">
                <h1 className="headertext1">Breathing Life into Clean Air </h1>
                <h1 className="headertext2">Your Trusted Duct Cleaning Experts in Toronto</h1>
            </div> */}
            
        </div>
    )
}