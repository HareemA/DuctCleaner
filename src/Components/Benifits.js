import React from "react";
import BenifitsCard from "./BenifitsCard";
import CardData from '../Data/CardData';

export default function Benifits() {
    const cardData = CardData.map (data => (
        <BenifitsCard id={data.id} 
            heading = {data.heading}
            para = {data.para}
        />
    ))
    return (
        <div className="card-main">
            <div>
                <h1 className="card-main-heading">Benefits of Duct Cleaning</h1>
            </div>
            <div className="card-conatiner">
            {cardData}
        </div>
        </div>
        
    )
}