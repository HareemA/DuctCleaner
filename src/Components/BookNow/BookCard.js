import React, {useState} from "react"

export default function BookCard() {

    const [formData , setFormData] = useState({
        Inspection:false , Cleaning:false, Furnance:false, remediation:false, VentCleaning:false , HVAC:false ,
        indoor:false , firstName:"" , lastName:"" , email:"" , phone:"" , address:"" ,
        city: "", postalCode: "" , type:""
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
        <div className="book-card">
            <form className="form">
                <div className="services-checkbox">
                    <p>What Service would you like?</p>
                    <div>
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
                </div>

                <div className="names">
                    <div className="names-inner">
                        <h2>First Name</h2>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
                    </div>

                    <div className="names-inner">
                        <h2>Last Name</h2>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
                    </div>
                </div>

                <div className="names">
                    <div className="names-inner">
                        <h2>Email</h2>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </div>

                    <div className="names-inner">
                        <h2>Phone</h2>
                        <input type="text" value={formData.phone} name="phone" onChange={handleChange}/>
                    </div>
                </div>

                <div className="names">
                    <div className="names-inner">
                        <h2>Address</h2>
                        <input type="text" value={formData.address} name="address" onChange={handleChange}/>
                    </div>

                    <div className="names-inner">
                        <h2>City</h2>
                        <input type="text" value={formData.city} name="city" onChange={handleChange}/>
                    </div>
                </div>

                <div className="names">
                    <div className="names-inner">
                        <h2>Postal Code</h2>
                        <input type="text" value={formData.postalCode} name="postalCode" onChange={handleChange}/>
                    </div>

                    <div className="names-inner">
                        <h2>Type</h2>
                        <select value={formData.type} name="type" onChange={handleChange}>
                            <option value="Choose">Choose Option</option>
                            <option value="Commercial">Commertial</option>
                            <option value="Residential">Residential</option>
                        </select>
                    </div>
                </div>

                <button className="submit-button">Submit</button>
            </form>
        </div>
    )
}
