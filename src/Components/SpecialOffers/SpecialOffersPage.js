
import NavBar from "../NavBar";
import Footer from "../Footer";
import SpecialOffersHeader from "./SpecialOffersHeader";
import SpecialOffersCards from "./SpecialOffersCards";

export default function SpecialOffersPage() {
    return (
        <div>
            <NavBar/>
            <SpecialOffersHeader/>
            <SpecialOffersCards/>
            <Footer/>
        </div>
    )
}