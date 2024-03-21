import React from 'react'

export default function ToolsCards(props) {
    return(
        <div className='tools-card'>
            <h5>{props.heading}</h5>
            <img src={props.img}></img>
        </div>
    )
}