import React from 'react';
import ToolsData from '../Data/ToolsData';
import ToolsCards from './ToolsCard';

export default function Tools() {
    const Tools = ToolsData.map (
        data => (
            <ToolsCards id={data.id}
            heading={data.heading}
            img={data.img}/>
        )
    )
    return (
        <div className='Tools-main'>
            {Tools}
        </div>
    )
}