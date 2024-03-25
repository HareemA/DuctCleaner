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
        scale: [1, 1.2, 1], // Start from normal size, increase to 20% larger, and back to normal
        transition: {
            duration: 4, // Duration of one cycle of the animation
            ease: "easeInOut", // Easing function to make the animation smooth
            repeat: Infinity, // Repeat the animation indefinitely
            repeatType: "loop", // Ensure the animation loops from start to end
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
                    <span>Prices starting as low as $300</span>
                </motion.h3>
            </motion.div>
        </div>
    );
}




