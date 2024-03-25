import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser';

export default function BookCard() {

    const [isMsgSent , SetIsMsgSent] = useState(false);

    const [formData , setFormData] = useState({
        Inspection:false , Cleaning:false, Furnance:false, remediation:false, VentCleaning:false , HVAC:false ,
        indoor:false , firstName:"" , lastName:"" , email:"" , phone:"" , address:"" ,
        city: "", postalCode: "" , type:""
    })

    const form = useRef();

    function handleChange(event) {
        const {name, value, type , checked} = event.target
        setFormData(prevData=> {
            return {
                ...prevData,
                [name] : type==="checkbox" ? checked : value
            }
            
        })

    }

    const sendEmail = (e) => {
        e.preventDefault();
        const selectedServices = Object.entries(formData)
            .filter(([key, value]) => value === true && key !== 'firstName' && key !== 'lastName' && key !== 'email' && key !== 'phone' && key !== 'address' && key !== 'city' && key !== 'postalCode' && key !== 'type')
            .map(([key]) => key);
    
        // Create a hidden form element
        const hiddenForm = document.createElement('form');
        hiddenForm.style.display = 'none';
    
        // Add input fields to the form for each piece of data
        const fields = {
            TOPIC: 'BOOKING',
            selectedServices: selectedServices.join(', '),
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            postalCode: formData.postalCode,
            type: formData.type
        };
    
        Object.entries(fields).forEach(([key, value]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            hiddenForm.appendChild(input);
        });
    
        // Append the form to the body and submit it
        document.body.appendChild(hiddenForm);
        
        emailjs.sendForm('service_to1tlut', 'template_2rvne8m', hiddenForm, {
            publicKey: 'kQUuqdkF61yxJTNtT',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    SetIsMsgSent(true);
                    setTimeout(() => {
                        SetIsMsgSent(false); // Hide the message sent dialog after 3 seconds
                    }, 3000);
                    setFormData({Inspection:false , Cleaning:false, Furnance:false, remediation:false, VentCleaning:false , HVAC:false ,
                        indoor:false , firstName:"" , lastName:"" , email:"" , phone:"" , address:"" ,
                        city: "", postalCode: "" , type:""})
                },
                (error) => {
                    console.log('FAILED', error);
                }
            );
    
        // Clean up: Remove the form from the DOM after submission
        document.body.removeChild(hiddenForm);
    };
    
    return (
        <div className="book-card">
            {isMsgSent && 
                <div className="message-box">Message Sent Successfully!</div>
            }
            <form className="form" onSubmit={sendEmail} ref={form}>
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
