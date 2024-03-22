import { useState } from "react"

export default function PriceCard() {
    const [formData , setFormData] = useState({
        Inspection:false , Cleaning:false, Furnance:false, remediation:false, VentCleaning:false , HVAC:false ,
        indoor:false , none:false , name:"" , email:"" , phone:"" ,
        message:""
    })

    function handleChange(event) {
        const {name, value, type , checked} = event.target
        setFormData(prevData=> {
            return {
                ...prevData,
                [name] : type==="checkbox" ? checked : value
            }
            
        })
        console.log(formData)
    }
    return (
        <div>
            <h1 className="quote-heading">Get a Quote</h1>
            <div className="book-card">
            <form className="form">
                <div className="services-checkbox">
                    <p>What Services would you like know About?</p>
                    <div className="Name">
                        <input type="checkbox" id="Inspection" name="Inspection" checked={formData.Inspection} onChange={handleChange}/>
                        <label htmlFor="Inspection">Air Duct Inspection</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Cleaning" name="Cleaning" checked={formData.Cleaning} onChange={handleChange}/>
                        <label htmlFor="Cleaning">Duct Cleaning</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Furnance" name="Furnance" checked={formData.Furnance} onChange={handleChange}/>
                        <label htmlFor="Furnance">Furnace and Air Handler Cleaning</label>
                    </div>
                    <div>
                        <input type="checkbox" id="remediation" name="remediation" checked={formData.remediation} onChange={handleChange}/>
                        <label htmlFor="redemiation">Mold and Mildew Remediation</label>
                    </div>
                    <div>
                        <input type="checkbox" id="VentCleaning" name="VentCleaning" checked={formData.VentCleaning} onChange={handleChange} />
                        <label htmlFor="VentCleaning">Dryer Vent Cleaning</label>
                    </div>
                    <div>
                        <input type="checkbox" id="HVAC" name="HVAC" checked={formData.HVAC} onChange={handleChange}/>
                        <label htmlFor="HVAC">HVAC System Maintenance</label>
                    </div>
                    <div>
                        <input type="checkbox" id="indoor" name="indoor" checked={formData.indoor} onChange={handleChange}/>
                        <label htmlFor="indoor">Indoor Air Quality Testing</label>
                    </div>
                    <div>
                        <input type="checkbox" id="none" name="indoor" checked={formData.none} onChange={handleChange}/>
                        <label htmlFor="none">None</label>
                    </div>
                </div>

                <div className="names-quote">
                    <h2>Name</h2>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </div>

                <div className="names-q">
                    <div className="names-q-inner">
                        <h2>Email</h2>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </div>

                    <div className="names-q-inner">
                        <h2>Phone</h2>
                        <input type="text" value={formData.phone} name="phone" onChange={handleChange}/>
                    </div>
                </div>

               
                <div className="names-q-inner">
                    <h2>Message</h2>
                    <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                </div>
              
                
                

                <button className="submit-button">Submit</button>
            </form>
        </div>
        </div>
    )
}