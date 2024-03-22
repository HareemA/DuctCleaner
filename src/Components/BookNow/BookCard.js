export default function BookCard() {
    return (
        <div className="book-card">
            <form className="form">
                <div className="services-checkbox">
                    <p>What Service would you like?</p>
                    <div>
                        <input type="checkbox" id="Inspection" />
                        <label htmlFor="Inspection">Air Duct Inspection</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Cleaning" />
                        <label htmlFor="Cleaning">Duct Cleaning</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Furnance" />
                        <label htmlFor="Furnance">Furnace and Air Handler Cleaning</label>
                    </div>
                    <div>
                        <input type="checkbox" id="remediation" />
                        <label htmlFor="redemiation">Mold and Mildew Remediation</label>
                    </div>
                    <div>
                        <input type="checkbox" id="VentCleaning" />
                        <label htmlFor="VentCleaning">Dryer Vent Cleaning</label>
                    </div>
                    <div>
                        <input type="checkbox" id="HVAC" />
                        <label htmlFor="HVAC">HVAC System Maintenance</label>
                    </div>
                    <div>
                        <input type="checkbox" id="indoor" />
                        <label htmlFor="indoor">Indoor Air Quality Testing</label>
                    </div>
                </div>

                <div className="names">
                    <div className="names-inner">
                        <h2>First Name</h2>
                        <input type="text"/>
                    </div>

                    <div className="names-inner">
                        <h2>Last Name</h2>
                        <input type="text"/>
                    </div>
                </div>

                <div className="names">
                    <div className="names-inner">
                        <h2>Email</h2>
                        <input type="text"/>
                    </div>

                    <div className="names-inner">
                        <h2>Phone</h2>
                        <input type="text"/>
                    </div>
                </div>

                <div className="names">
                    <div className="names-inner">
                        <h2>Address</h2>
                        <input type="text"/>
                    </div>

                    <div className="names-inner">
                        <h2>City</h2>
                        <input type="text"/>
                    </div>
                </div>

                <div className="names">
                    <div className="names-inner">
                        <h2>Postal Code</h2>
                        <input type="text"/>
                    </div>

                    <div className="names-inner">
                        <h2>Type</h2>
                        <select>
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
