import React from "react";
import { motion } from "framer-motion";
import service from '../../Images/men-working-with-equipment-full-shot.jpg';

export default function ServicesHeader() {
    return (
        <motion.div 
            className="main--image--services"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="header--container">
                <motion.h1
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1 , y: 0}}
                    transition={{ duration: 2, delay: 0.2 }}
                >
                    <span>SERVICES</span>
                </motion.h1>
                <motion.span
                    className="cen-services"
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 0.4 }}
                >
                    Avail the Best Cleaning Services
                </motion.span>
            </div>
        </motion.div>
    );
}
