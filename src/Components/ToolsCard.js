import React from 'react'

export default function ToolsCards(props) {
    return(
        <div className='tools-card'>
            <img src={props.img}></img>
            <h5>{props.heading}</h5>
            
        </div>
    )
}