import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function PriceCard() {
    const [ isMsgSent ,SetIsMsgSent] = useState(false);

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
        
    }
    const sendEmail = (e) => {
        e.preventDefault()
        const selectedServices = Object.entries(formData)
            .filter(([key, value]) => value === true && key !== 'name' &&  key !== 'email' && key !== 'phone' && key !== 'message')
            .map(([key]) => key);
    
        // Create a hidden form element
        const hiddenForm = document.createElement('form');
        hiddenForm.style.display = 'none';
    
        // Add input fields to the form for each piece of data
        const fields = {
            TOPIC: 'QUOTE',
            selectedServices: selectedServices.join(', '),
            Name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message:formData.message
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
        
        emailjs.sendForm('service_fzy3jif', 'template_99rwqi2', hiddenForm, {
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
                        indoor:false , none:false , name:"" , email:"" , phone:"" ,
                        message:""})
                    
                },
                (error) => {
                    console.log('FAILED', error);
                }
            );
    
        // Clean up: Remove the form from the DOM after submission
        document.body.removeChild(hiddenForm);
    };
    return (
        <div>
            <h1 className="quote-heading">Get a Quote</h1>
            {isMsgSent && 
                <div className="message-box">Message Sent Successfully!</div>
            }
            <div className="quote-card">
            <form className="form" onSubmit={sendEmail}>
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
                        <input type="checkbox" id="none" name="none" checked={formData.none} onChange={handleChange}/>
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