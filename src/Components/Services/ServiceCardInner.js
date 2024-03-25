import ServiceData from "../../Data/ServiceData";
import ServicesHeader from "./ServicesHeader";
import Footer from "../Footer";
import NavBar from "../NavBar";

export default function ServiceCardInner () {
    const Services = ServiceData.map(data => (
        <div className="services-inner-card" key={data.id}>
            {data.position === "left" ? (
                <>
                    
                    <img className="services-inner-img" src={data.img} alt={data.alt} />
                    <div>
                        <h2 className="service-inner-card-heading">{data.heading}</h2>
                        <p className="services-inner-para">{data.para}</p>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <h2 className="service-inner-card-heading">{data.heading}</h2>
                        <p className="services-inner-para">{data.para}</p>
                    </div>
                    <img className="services-inner-img" src={data.img} alt={data.alt} />
                </>
            )}
        </div>
    ));
    return (
        <div>
            <NavBar/>
            <ServicesHeader/>
            <div className="service-inner-card-conatiner">
            <h3 className="services-h3">FIND OUT ABOUT ALL THE SERVICES</h3>
                {Services}
            </div>
            <Footer/>
        </div>
    )
}