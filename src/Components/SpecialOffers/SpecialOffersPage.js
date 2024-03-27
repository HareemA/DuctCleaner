
import NavBar from "../NavBar";
import Footer from "../Footer";
import SpecialOffersHeader from "./SpecialOffersHeader";
import SpecialOffersCards from "./SpecialOffersCards";
import PromotionsPoster from "../PromotionsPoster";

export default function SpecialOffersPage() {
    return (
        <div>
            <NavBar/>
            {/* <SpecialOffersHeader/> */}
            <PromotionsPoster/>
            <SpecialOffersCards/>
            <Footer/>
        </div>
    )
}