import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser';

export default function BookCard() {

    const [isMsgSent , SetIsMsgSent] = useState(false);

    const [formData , setFormData] = useState({
        Blower_Furnance_Cleaning:false , AC_Coil_Cleaning:false, Duct_Sanitization:false, Humidified_Pad_replacement:false , Upgrade_furnace_filter:false ,
        Standard_Package:false , firstName:"" , lastName:"" , email:"" , phone:"" , address:"" ,
        city: "", postalCode: "" , type:"" , Additional_Vent:false, No_of_Vents:0 , Regular_Package:false, Delux_Package:false 
    })

    const form = useRef();

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            // If a package checkbox is checked, uncheck the other package checkboxes
            if (name === 'Standard_Package' && checked) {
                setFormData(prevData => ({
                    ...prevData,
                    Standard_Package: true,
                    Regular_Package: false,
                    Delux_Package: false
                }));
            } else if (name === 'Regular_Package' && checked) {
                setFormData(prevData => ({
                    ...prevData,
                    Standard_Package: false,
                    Regular_Package: true,
                    Delux_Package: false
                }));
            } else if (name === 'Delux_Package' && checked) {
                setFormData(prevData => ({
                    ...prevData,
                    Standard_Package: false,
                    Regular_Package: false,
                    Delux_Package: true
                }));
            } else {
                setFormData(prevData => ({
                    ...prevData,
                    [name]: checked
                }));
            }
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    }
    const sendEmail = (e) => {
        e.preventDefault()

        const additionalServices = Object.entries(formData)
        .filter(([key, value]) => value === true && key !== 'firstName' && key !== 'lastName' && key !== 'email' && key !== 'phone' && key !== 'address' && key !== 'city' && key !== 'postalCode' && key !== 'type' && key!=='No_of_Vents' && key!== 'Regular_Package' && key!= 'Delux_Package')
        .map(([key]) => {
            if (key === 'Additional_Vent' && formData.Additional_Vent) {
                // If "Additional Vents" is checked, include the number of vents
                return `${key} (${formData.No_of_Vents} vents)`;
            }
            return key;
        });

        let selectedPackage = '';
        if (formData.Standard_Package) {
            selectedPackage = 'Standard Package';
        } else if (formData.Regular_Package) {
            selectedPackage = 'Regular Package';
        } else if (formData.Delux_Package) {
            selectedPackage = 'Delux Package';
        }
        else {
            alert('Please select a package.');
            return;
        }
    
        if (formData.type=="Choose Option" || formData.type=="None") {
            alert('Choose a valid type');
            return;
        }
        // Create a hidden form element
        const hiddenForm = document.createElement('form');
        hiddenForm.style.display = 'none';
    
        // Add input fields to the form for each piece of data
        const fields = {
            TOPIC: 'BOOKING',
            selectedPackage: selectedPackage,
            additionalServices: additionalServices.join(', '),
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
        
        emailjs.sendForm('service_fzy3jif', 'template_2rvne8m', hiddenForm, {
            publicKey: 'kQUuqdkF61yxJTNtT',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    SetIsMsgSent(true);
                    setTimeout(() => {
                        SetIsMsgSent(false); // Hide the message sent dialog after 3 seconds
                    }, 3000);
                    setFormData({Blower_Furnance_Cleaning:false , AC_Coil_Cleaning:false, Duct_Sanitization:false, Humidified_Pad_replacement:false , Upgrade_furnace_filter:false ,
                        Standard_Package:false , firstName:"" , lastName:"" , email:"" , phone:"" , address:"" ,
                        city: "", postalCode: "" , type:"", Additional_Vent:false, No_of_Vents:0 , Regular_Package:false, Delux_Package:false})
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
                    <p>What Package would your like?</p>
                    <div>
                        <input type="checkbox" id="Standard_Package" name="Standard_Package" checked={formData.Standard_Package} onChange={handleChange}/>
                        <label htmlFor="Standard_Package">Standard Package</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Regular_Package" name="Regular_Package" checked={formData.Regular_Package} onChange={handleChange}/>
                        <label htmlFor="Regular_Package">Regular Package</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Delux_Package" name="Delux_Package" checked={formData.Delux_Package} onChange={handleChange}/>
                        <label htmlFor="Delux_Package">Delux Package</label>
                    </div>
                </div>
                <div className="services-checkbox">
                    <p>Additional Package</p>
                    <div>
                        <input type="checkbox" id="Additional_Vent" name="Additional_Vent" checked={formData.Additional_Vent} onChange={handleChange}/>
                        <label htmlFor="Additional_Vent">Additional Vents</label>
                        {formData.Additional_Vent && 
                            <div>
                                <label>How many Vents?</label>
                                <input type="integer" id="No_of_vents" name="No_of_vents" value={formData.No_of_vents} onChange={handleChange}/>
                            </div>
                        }
                            
                    </div>
                    <div>
                        <input type="checkbox" id="Blower_Furnance_Cleaning" name="Blower_Furnance_Cleaning" checked={formData.Blower_Furnance_Cleaning} onChange={handleChange}/>
                        <label htmlFor="Blower_Furnance_Cleaning">Furnance Cleaning (Blower Only)</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Furnance" name="AC_Coil_Cleaning" checked={formData.AC_Coil_Cleaning} onChange={handleChange}/>
                        <label htmlFor="Furnance">AC Coil Cleaning</label>
                    </div>
                    <div>
                        <input type="checkbox" id="remediation" name="Duct_Sanitization" checked={formData.Duct_Sanitization} onChange={handleChange}/>
                        <label htmlFor="redemiation">Duct Sanitization</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Humidified_Pad_replacement" name="Humidified_Pad_replacement" checked={formData.Humidified_Pad_replacement} onChange={handleChange} />
                        <label htmlFor="Humidified_Pad_replacement">Humidified Pad replacement</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Upgrade_furnace_filter" name="Upgrade_furnace_filter" checked={formData.Upgrade_furnace_filter} onChange={handleChange}/>
                        <label htmlFor="Upgrade_furnace_filter">Upgrade furnace filter</label>
                    </div>
                </div>

                <div className="names">
                    <div className="names-inner">
                        <h2>First Name</h2>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required/>
                    </div>

                    <div className="names-inner">
                        <h2>Last Name</h2>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required/>
                    </div>
                </div>

                <div className="names">
                    <div className="names-inner">
                        <h2>Email</h2>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} required/>
                    </div>

                    <div className="names-inner">
                        <h2>Phone</h2>
                        <input type="text" value={formData.phone} name="phone" onChange={handleChange} required/>
                    </div>
                </div>

                <div className="names">
                    <div className="names-inner">
                        <h2>Address</h2>
                        <input type="text" value={formData.address} name="address" onChange={handleChange} required/>
                    </div>

                    <div className="names-inner">
                        <h2>City</h2>
                        <input type="text" value={formData.city} name="city" onChange={handleChange} required/>
                    </div>
                </div>

                <div className="names">
                    <div className="names-inner">
                        <h2>Postal Code</h2>
                        <input type="text" value={formData.postalCode} name="postalCode" onChange={handleChange} required/>
                    </div>

                    <div className="names-inner">
                        <h2>Type</h2>
                        <select value={formData.type} name="type" onChange={handleChange} required>
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
