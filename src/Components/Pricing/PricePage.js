import NavBar from '../NavBar';
import PriceHeader from './PriceHeader';
import PricingMain from './PricingMain';
import PriceCard from './PricingCard';
import Footer from '../Footer';
import PriceValues from './PriceValues';
import Testimonials from '../Testimonials';

export default function PricePage() {
    return (
        <div>
            <NavBar/>
            <PriceHeader/>
            <PricingMain/>
            <PriceValues/>
            <PriceCard/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}