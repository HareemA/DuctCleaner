import React from "react";
import ServicesData from '../../Data/ServiceData';

export default function ServicesCard() {
    const Services = ServicesData.map(data => (
        <div className="services-card" key={data.id}>
            {data.position === "left" ? (
                <>
                    
                    <img className="services-img" src={data.img} alt={data.alt} />
                    <div>
                        <h2 className="service-card-heading">{data.heading}</h2>
                        <p className="services-para">{data.para}</p>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <h2 className="service-card-heading">{data.heading}</h2>
                        <p className="services-para">{data.para}</p>
                    </div>
                    <img className="services-img" src={data.img} alt={data.alt} />
                </>
            )}
        </div>
    ));

    return (
        <div className="service-card-conatiner">
            {Services}
        </div>
    );
}
