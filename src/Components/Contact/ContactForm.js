import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {

    const [isMsgSent , SetIsMsgSent] = useState(false);

    const [formData , setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        topic: "",
        message: "",
        checkbox: false
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Create a hidden form element
        const hiddenForm = document.createElement('form');
        hiddenForm.style.display = 'none';
    
        // Add input fields to the form for each piece of data
        const fields = {
            TOPIC: 'CONTACT',
            selectedServices: formData.topic,
            Name: formData.firstName+" "+formData.lastName,
            email: formData.email,
            phone: formData.phoneNumber,
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
        
        emailjs.sendForm('service_to1tlut', 'template_99rwqi2', hiddenForm, {
            publicKey: 'kQUuqdkF61yxJTNtT',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setTimeout(() => {
                      SetIsMsgSent(false); // Hide the message sent dialog after 3 seconds
                  }, 3000);
                  setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    topic: "",
                    message: "",
                    checkbox: false
                  })
                },
                (error) => {
                    console.log('FAILED', error);
                }
            );
    
        // Clean up: Remove the form from the DOM after submission
        document.body.removeChild(hiddenForm);
    };

    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="text-lg">
                GTA Duct Cleaning welcomes messages from customers and potential partners, providing a user-friendly platform for inquiries, feedback, or collaboration proposals, ensuring prompt and personalized responses to all communication channels.
                </p>
            </div>
            {isMsgSent && 
                <div className="message-box">Message Sent Successfully!</div>
            }
            <form className="contact--form--container" onSubmit={sendEmail}>
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="firstName"
                            id="first-name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="lastName"
                            id="last-name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input
                            type="email"
                            className="contact--input text-md"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input
                            type="number"
                            className="contact--input text-md"
                            name="phoneNumber"
                            id="phone-number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contact--label">
                    <span className="text-md">Choose a Topic</span>
                    <select
                        id="choose-topic"
                        className="contact--input text-md"
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                    >
                        <option>Select One...</option>
                        <option>Duct Inspection</option>
                        <option>Vent Cleaning</option>
                        <option>Mold and Mildew Cleaning</option>
                        <option>Maintenance</option>
                        <option>Indoor Air Quality Testing</option>
                        <option>Furnace and Air Handler Cleaning</option>
                        <option>Other</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea
                        className="contact--input text-md"
                        id="message"
                        name="message"
                        rows="8"
                        placeholder="Type your message..."
                        value={formData.message}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="checkbox" className="checkbox--label">
                    <input
                        type="checkbox"
                        required
                        name="checkbox"
                        id="checkbox"
                        checked={formData.checkbox}
                        onChange={handleChange}
                    />
                    <span className="text-sm">I accept the terms</span>
                </label>
                <div>
                    <button className="btn btn-primary contact--form--btn">Submit</button>
                </div>
            </form>
        </section>
    );
}
