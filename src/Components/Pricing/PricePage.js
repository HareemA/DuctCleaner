import NavBar from '../NavBar';
import PriceHeader from './PriceHeader';
import PricingMain from './PricingMain';
import PriceCard from './PricingCard';

export default function PricePage() {
    return (
        <div>
            <NavBar/>
            <PriceHeader/>
            <PricingMain/>
            <PriceCard/>
        </div>
    )
}