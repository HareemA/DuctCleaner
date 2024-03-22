import React from "react";
import mail from '../Images/mail (1).png';
import home from '../Images/home.png';

export default function Footer() {
    return (
        <div className="Footer">
            <div>
                <h2>Service Area</h2>
                <ul>
                    <li>Toronto</li>
                    <li>Ottowa</li>
                    <li>Ajax</li>
                </ul>
            </div>
            <div>
                <h2>Our Services</h2>
                <ul>
                    <li>Air Duct Inspection</li>
                    <li>Duct Cleaning</li>
                    <li>Furnance and Air Handler Cleaning</li>
                    <li>Mold and Mildew Remediation</li>
                    <li>Dryer Vent Cleaning</li>
                    <li>HVAC System Maintenance</li>
                    <li>Dryer Vent Cleaning</li>
                </ul>
            </div>
            <div>
                <h2>Company</h2>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h2>Reach Us</h2>
                <div className="ReachUs">
                    <h3>(416) 247 8898</h3>
                    <div className="mail-div">
                        <img src={mail} className="mail"/>
                        <h6>Fsadc2023@gmail.com</h6>
                    </div>
                    <div className="mail-div">
                        <img src={home} className="mail"/>
                        <h6>54 Shorting Rd Scarborough, <br/> ON ,M1S 3S4</h6>
                    </div>


                </div>
            </div>
        </div>
    )
}