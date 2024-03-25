import React from "react";
import mail from "../Images/mail (1).png";
import home from "../Images/home.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <section className="footer--container">
        <div className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Service Area</h4>
          <ul className="links">
            <li>
              <a href="#">Toronto</a>
            </li>
            <li>
              <a href="#">Mississauga</a>
            </li>
            <li>
              <a href="#">Vaughan</a>
            </li>
            <li>
              <a href="#">Brampton</a>
            </li>
            <li>
              <a href="#">Oshawa</a>
            </li>
            <li>
              <a href="#">Richmond Hill</a>
            </li>
            <li>
              <a href="#">Newmarket</a>
            </li>
            <li>
              <a href="#">Oakville</a>
            </li>
            <li>
              <a href="#">Pickering</a>
            </li>
            <li>
              <a href="#">Aurora</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul className="links">
            <li>
              <a href="#">Air Duct Inspection</a>
            </li>
            <li>
              <a href="#">Duct Cleaning</a>
            </li>
            <li>
              <a href="#">Furnance and Air Handler Cleaning</a>
            </li>
            <li>
              <a href="#">Mold and Mildew Remediation</a>
            </li>
            <li>
              <a href="#">Dryer Vent Cleaning</a>
            </li>
            <li>
              <a href="#">HVAC System Maintenance</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul className="links">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">BookNow</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Our Tools</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Reach Us</h4>
          <p>
            <h3>(416) 247 8898</h3>
          </p>
          <div className="mail-div">
            <img src={mail} className="mail" />
            <h6>gtaductcleaning001@gmail.com</h6>
          </div>
          <div className="mail-div">
            <img src={home} className="mail" />
            <h6>
              54 Shorting Rd Scarborough, <br /> ON ,M1S 3S4
            </h6>
          </div>
          <div className="icons">
                <FontAwesomeIcon className="ic fa-brands fa-facebook-f" icon={faFacebookF} />
                <FontAwesomeIcon className="ic fa-brands fa-twitter" icon={faTwitter} />
                <FontAwesomeIcon className="ic fa-brands fa-linkedin" icon={faLinkedin} />
            </div>
        </div>
      </div>
      </div>
    </section>
  );
}
