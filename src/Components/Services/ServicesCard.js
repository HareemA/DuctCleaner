import React from "react";
import ServicesData from '../../Data/ServiceData';
import CardData from "../../Data/CardData";
import { Link } from "react-router-dom";

export default function ServicesCard() {
    // const Services = ServicesData.map(data => (
    //     <div className="services-card" key={data.id}>
    //         {data.position === "left" ? (
    //             <>
                    
    //                 <img className="services-img" src={data.img} alt={data.alt} />
    //                 <div>
    //                     <h2 className="service-card-heading">{data.heading}</h2>
    //                     <p className="services-para">{data.para}</p>
    //                 </div>
    //             </>
    //         ) : (
    //             <>
    //                 <div>
    //                     <h2 className="service-card-heading">{data.heading}</h2>
    //                     <p className="services-para">{data.para}</p>
    //                 </div>
    //                 <img className="services-img" src={data.img} alt={data.alt} />
    //             </>
    //         )}
    //     </div>
    // ));

    return (
        <div className="service-card-conatiner">
            {ServicesData.map(data => (
                <div className="service-card-outer">
                    {data.url? <Link to='/SpecialOffers'>
                        <div className="services-card" key={data.id} style={{backgroundImage:`url(${data.img})`, backgroundSize:'cover' , backgroundRepeat:'no-repeat' , backgroundPosition:'center'}}>
                        
                            <h2 className="service-card-heading"> <span>{data.heading}</span></h2>
                        </div>
                    </Link> :
                    <div className="services-card" key={data.id} style={{backgroundImage:`url(${data.img})`, backgroundSize:'cover' , backgroundRepeat:'no-repeat' , backgroundPosition:'center'}}>
                        
                        <h2 className="service-card-heading"> <span>{data.heading}</span></h2>
                    </div>
                }
                    
                    <div className="services-para">
                        <p>{data.para}</p>
                    </div>
                </div>
                
            ))}
        </div>
    );
}