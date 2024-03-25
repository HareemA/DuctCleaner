import commertial from '../../Images/commertial.jpg';
import resdient from '../../Images/resedential.jpg';

export default function ServicesTypes() {
    return (
        <div className="services-type-main">
            <div className="services-container">
                <img src={commertial} className='types-images'/>
                <div className="services-type">
                    <h2 className="services-types-heading">Commertial Duct Cleaning</h2>
                    <p className="services-types-para">Commercial duct cleaning involves the cleaning and maintenance of HVAC (heating, ventilation, and air conditioning) systems in commercial buildings, such as offices, retail stores, restaurants, hospitals, schools, and industrial facilities</p>
                    <ul className="services-types-list">
                        <li className="list-item">Assessment and Inspection</li>
                        <li className="list-item">Preparation</li>
                        <li className="list-item">Cleaning Process</li>
                        <li className="list-item">Component Cleaning</li>
                        <li className="list-item">Sanitization and Disinfecting</li>
                        <li className="list-item">Final Inspection</li>
                    </ul>
                </div>
            </div>
            <div className="services-container">
                <div className="services-type">
                    <h2 className="services-types-heading">Residential Duct Cleaning</h2>
                    <p className="services-types-para">Residential duct cleaning refers to the process of cleaning the air ducts and HVAC systems within homes. It involves removing accumulated dust, debris, allergens, and contaminants from the ductwork to improve indoor air quality and HVAC system efficiency.</p>
                    <ul className="services-types-list">
                        <li className="list-item">Inspection</li>
                        <li className="list-item">Cleaning Preparation</li>
                        <li className="list-item">Duct Cleaning</li>
                        <li className="list-item">Component Cleaning</li>
                        <li className="list-item">Sanitization (Optional)</li>
                        <li className="list-item">Final Inspection</li>
                    </ul>
                </div>
                <img src={resdient} className='types-images'/>
            </div>
        </div>
    );
}
