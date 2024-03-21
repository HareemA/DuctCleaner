import React from "react";

export default function BenifitsCard(props) {
    return (
        <div className="card">
            <h2>{props.heading}</h2>
            <p>{props.para}</p>
        </div>
    )
}