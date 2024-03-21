import React from 'react';
import ToolsData from '../Data/ToolsData';
import ToolsCards from './ToolsCard';

export default function Tools() {
    const Tools = ToolsData.map (
        data => (
            <ToolsCards id={data.id}
            img={data.img}
            heading={data.heading} />
            
        )
    )
    return (
        <div> 
            <div>
                <h1 className='Tools--heading'>Our Tools</h1>
            </div>
            <div className='Tools-main'>
                {Tools}
            </div>
        </div>
        
    )
}