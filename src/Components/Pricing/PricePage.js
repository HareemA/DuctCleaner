import NavBar from '../NavBar';
import PriceHeader from './PriceHeader';
import PricingMain from './PricingMain';
import PriceCard from './PricingCard';
import Footer from '../Footer';

export default function PricePage() {
    return (
        <div>
            <NavBar/>
            <PriceHeader/>
            <PricingMain/>
            <PriceCard/>
            <Footer/>
        </div>
    )
}