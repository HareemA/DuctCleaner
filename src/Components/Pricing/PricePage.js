import NavBar from '../NavBar';
import PriceHeader from './PriceHeader';
import PricingMain from './PricingMain';
import PriceCard from './PricingCard';
import Footer from '../Footer';
import PriceValues from './PriceValues';

export default function PricePage() {
    return (
        <div>
            <NavBar/>
            <PriceHeader/>
            <PricingMain/>
            <PriceValues/>
            <PriceCard/>
            <Footer/>
        </div>
    )
}