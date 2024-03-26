import React from "react";
import appointment from '../../Images/appointment.jpg';
import duct from '../../Images/duct.jpg';
import { motion } from "framer-motion";


export default function BookHeader() {
    return (
        // <div>
        //     <img src={appointment} className="book-header-image"/>
        // </div>
        // <motion.div 
        //     className="main--image--book"
        //     initial={{ opacity: 0, y: -20 }}
        //     animate={{ opacity: 1, y: 0 }}
        //     transition={{ duration: 0.5 }}
        // >
        //     <div className="header--container">
        //         <motion.h1
        //             initial={{ opacity: 0, y: 70 }}
        //             animate={{ opacity: 1 , y: 0}}
        //             transition={{ duration: 2, delay: 0.2 }}
        //         >
        //             <span>BOOK AN APPOINTMENT WITH US</span>
        //         </motion.h1>
        //         <motion.span
        //             className="cen-book"
        //             initial={{ opacity: 0, y: 70 }}
        //             animate={{ opacity: 1, y: 0 }}
        //             transition={{ duration: 2, delay: 0.4 }}
        //         >
        //             Reach out to us easily
        //         </motion.span>
        //     </div>
        // </motion.div>
        <div className="header--container-book">
                <motion.h1
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1 , y: 0}}
                    transition={{ duration: 2, delay: 0.2 }}
                >
                    <span>BOOK AN APPOINTMENT WITH US</span>
                </motion.h1>
                <motion.span
                    className="cen-book"
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 0.4 }}
                >
                    Reach out to us easily
                </motion.span>
            </div>
    )
    
}