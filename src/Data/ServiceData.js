import inspection from '../Images/inspection.jpg';
import furnance from '../Images/furnance.jpeg';
import vent from '../Images/vent.jpeg';
import office from '../Images/office.jpg';
import res from '../Images/res.jpg';
import special from '../Images/special-offer.png';
const ServiceData = [
    {
        id:1, 
        img: special,
        heading: "",
        position: "left",
        para: "Explore our special offers tailored to meet your needs. From discounted rates to bundled services, we have exclusive deals designed to make your HVAC maintenance more affordable and convenient.",
        url : true
    },
    {
        id:2, 
        img: res,
        heading: "Residential Air Duct Cleaning",
        position: "right",
        para: "Breathe cleaner air and enjoy enhanced indoor comfort with our residential air duct cleaning services. Our expert technicians remove dust, allergens, and contaminants from your ductwork, promoting better airflow and healthier living environments for you and your family."
    },
    {
        id:3, 
        heading: "Furnace Cleaning",
        img: furnance,
        position: "left",
        para: "Ensure optimal performance and longevity of your furnace with our professional furnace cleaning services. Our thorough cleaning process removes built-up dirt and debris, helping your furnace operate efficiently and reducing the risk of breakdowns during peak seasons."
    },
    {
        id:4, 
        heading: "Commercial and Office Duct Cleaning",
        img: office,
        position: "right",
        para: "Maintain a clean and comfortable workspace with our commercial and office duct cleaning solutions. Our team efficiently removes contaminants from your ductwork, improving indoor air quality and creating a healthier environment for employees and customers alike."
    },
    {
        id:5, 
        heading: "Dryer Vent Cleaning",
        img: vent,
        position: "left",
        para: "Prevent dryer fires and improve dryer efficiency with our professional dryer vent cleaning services. Our technicians thoroughly clean dryer vents and ductwork, removing lint and debris to ensure proper airflow and ventilation, reducing the risk of fire hazards and increasing energy efficiency."
    },
    // {
    //     id:6, 
    //     heading: "Air Duct Inspection",
    //     img: inspection,
    //     position: "right",
    //     para: "Identify and address indoor air quality issues with our comprehensive air duct inspection services. Our certified technicians conduct thorough assessments of your ductwork, identifying potential sources of contamination and recommending tailored solutions to improve indoor air quality and occupant health."
    // },
];


export default ServiceData;