import price from '../../Images/Price (2).png';
import prices from '../../Images/Price.png';

export default function PriceHeader() {
    return (
        <div> 
            <img src={price} className="servicesImg"/>
            <h1 className="servives-heading">Our Prices</h1>
        </div>
    )
}