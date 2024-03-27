import { Link } from "react-router-dom"

export default function SpecialOffersCards() {
    return (
        <div className="offer-card-container">
            <div className="offer-card">
                <div className="round-div">
                    <div>For</div>
                    <div className="price-font">$199</div>
                    <div>No hidden Price</div>
                </div>
                <div className="offer-text-div">
                    <div className="package-name">Regular Package</div>
                    <div className="package-offer">What we provide</div>
                    <div>Upto 10 Vents</div>
                    <div>Vents Connected to Furnance (Supply)</div>
                    <div>Complete job for all and main line</div>
                </div>
                <div className="order-button">
                    <Link to='/Book' className="order-link">ORDER NOW</Link>
                </div>
            </div>
            <div className="offer-card">
                <div className="round-div">
                    <div>For</div>
                    <div className="price-font">$399</div>
                    <div>No hidden Price</div>
                </div>
                <div className="offer-text-div">
                    <div className="package-name">Delux Package</div>
                    <div className="package-offer">What we provide</div>
                    <div>Unlimited Vents</div>
                    <div>Vents Connected to Furnance (Supply)</div>
                    <div>Vents Connected to Furnance (Return)</div>
                    <div>Sanitize and disinfect the duct system</div>
                </div>
                <div className="order-button">
                    <Link to='/Book' className="order-link">ORDER NOW</Link>
                </div>
            </div>
        </div>
        
        
    )
}