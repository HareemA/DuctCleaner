import React from "react";
import { motion } from "framer-motion";

export default function Header() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            duration: 1,
            transition: {
                duration: 3,
                staggerChildren: 0.7, 
            },
        },
    };

    const childVariants = {
        hidden: { y: 70, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        duration: 1,
    };

    const pulseAnimation = {
        scale: [1, 1.2, 1], 
        transition: {
            duration: 3, 
            ease: "easeInOut", 
            repeat: Infinity, 
            repeatType: "loop", 
        }
    };

    return (
        <div className="main--image">
            <motion.div
                className="header--container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 variants={childVariants}>
                    <span>Breathing Life into Clean Air</span>
                </motion.h1>
                {/* <motion.h3 variants={childVariants}>
                    <span className="cen">Trusted Duct cleaning Experts</span>
                </motion.h3> */}
                <motion.h3
                    className="cen"
                    animate={pulseAnimation} // Apply the defined animation
                >
                    <span>Check our new Deal below!</span>
                </motion.h3>
            </motion.div>
        </div>
    );
}




