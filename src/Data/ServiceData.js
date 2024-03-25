import inspection from '../Images/inspection.jpg';
import cleaning from '../Images/air-duct-cleaning.jpg';
import furnance from '../Images/cleaning.jpeg';
import mold from '../Images/Mold-Remediation-Services-1.jpg';
import vent from '../Images/vent.jpeg';
import Hvac from '../Images/maintenance.jpg';
import air from '../Images/air-testing.jpeg';
const ServiceData = [
    {
        id:1, 
        img: inspection,
        heading: "Air Duct Inspection",
        position: "left",
        para: "Over time, dust, allergens, and contaminants can accumulate within HVAC ductwork, circulating throughout indoor spaces and contributing to poor indoor air quality. Duct cleaning removes these pollutants, reducing the risk of respiratory issues, allergies, and other health concerns among occupants."
    },
    {
        id:2, 
        img: cleaning,
        heading:"Duct Cleaning",
        position: "right",
        para: "Clean ductwork allows for better airflow and distribution of heated or cooled air throughout the building, reducing the workload on HVAC systems and improving energy efficiency. By removing obstructions and blockages from ducts, duct cleaning helps HVAC systems operate more effectively, leading to lower energy consumption and utility costs."
    },
    {
        id:3, 
        heading:"Furnance and Air Handler Cleaning",
        img: furnance,
        position: "left",
        para: "Regular duct cleaning can help prolong the lifespan of HVAC systems by reducing wear and tear on components such as fans, motors, and heat exchangers. By maintaining clean ductwork, homeowners and building owners can avoid costly repairs or premature replacements of HVAC equipment."
    },
    {
        id:4, 
        heading:"Dryer Vent Cleaning",
        img: vent,
        position: "left",
        para: "Some duct cleaning companies also offer dryer vent cleaning services to remove lint, dust, and debris from dryer vents and ductwork. This helps to prevent dryer fires, improve dryer performance, and reduce energy consumption by ensuring proper airflow and ventilation"
    },
    {
        id:5, 
        heading:"HVAC System Maintenance",
        img: Hvac,
        position: "right",
        para: "Duct cleaning companies may provide routine maintenance services to help homeowners and building owners maintain the cleanliness and efficiency of their HVAC systems. This may include inspection, cleaning, lubrication, and adjustment of system components to ensure optimal performance and longevity."
    },
    {
        id:6, 
        heading:"Indoor Air Quality Testing",
        img: air,
        position: "left",
        para: "In addition to cleaning services, duct cleaning companies may offer indoor air quality testing to assess the level of pollutants and contaminants present in the indoor environment. This testing may involve sampling air quality parameters such as particulate matter, volatile organic compounds (VOCs), humidity, and carbon dioxide levels to identify potential health hazards and recommend appropriate remediation measures."
    },
]

export default ServiceData;