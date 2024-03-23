import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../Images/Logo-final.png'
import close from '../Images/close.png';
import menu from '../Images/menu.png';

export default function NavBar() {
    const [isSmall, setIsSmall] = useState(window.innerWidth <= 830);
    const [isClicked , setIsClicked] = useState(false);

    function handleClicked() {
        setIsClicked(prevState => !prevState)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth <= 830);
        };

        window.addEventListener("resize", handleResize);
        
        // Cleanup function
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="navbar">
            <div className="navbar--left">
                <img src={logo} className="logo"/>
            </div>
            
            <div className="navbar--mid">
                {isSmall ? (
                    <div className="dropdown">
                        <div>
                            <input type="image" onClick={handleClicked} className="menu" src={isClicked? close: menu}></input>
                        </div>
                        
                        {isClicked &&
                            <div className="dropdown-content">
                                <Link to='/' className="link-nav">HOME</Link>
                                <Link to='/Contact' className="link-nav section--heading">CONTACT</Link>
                                <Link to='/Services' className="link-nav">SERVICES</Link>
                                <Link to='/Price' className="link-nav">PRICING</Link>
                                <Link to='/Book' className="link-nav">BOOK NOW</Link>
                            </div>
                        }
                        
                    </div>
                ) : (
                    <>
                        <h6><Link to='/' className="link-nav">HOME</Link></h6>
                        <h6><Link to='/Contact' className="link-nav section--heading">CONTACT</Link></h6>
                        <h6><Link to='/Services' className="link-nav">SERVICES</Link></h6>
                        <h6><Link to='/Price' className="link-nav">PRICING</Link></h6>
                    </>
                )}
            </div>
            {!isSmall && (
                <div className="book-div">
                    <Link to='/Book' className="book">BOOK NOW</Link>
                </div>
            )}
        </div>
    );
}
