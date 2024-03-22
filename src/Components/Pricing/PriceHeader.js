import price from '../../Images/prices.png';
import prices from '../../Images/Price.png';

export default function PriceHeader() {
    return (
        <div> 
            <img src={prices} className="servicesImg"/>
            <h1 className="servives-heading">Our Prices</h1>
        </div>
    )
}