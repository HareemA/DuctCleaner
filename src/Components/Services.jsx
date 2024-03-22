import React from 'react';
import ServicesData from "../Data/ServicesData";



export default function Services() {
  return (
    <section className="services--section" id="ourServices">
      <div className="portfolio--container">
        <p className="section--title">GTA Duct Cleaning Services</p>
        <h2 className="services--section--heading">OUR SERVICES</h2>
      </div>
      <div className="services--section--container">
        {ServicesData.map((item, index) => (
          <div key={index} className="services--section--card">
            <div className="services--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="services--section--card--content">
              <h3 className="services--section--title">{item.title}</h3>
              <p className="services--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}