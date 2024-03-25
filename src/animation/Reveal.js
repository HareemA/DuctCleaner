import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "fit-content" }) => {
    const ref = useRef(null);
    const controls = useAnimation();
    const slideControls = useAnimation();
    const [inView, refView] = useInView({ ref, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
            slideControls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div 
            animate={controls} 
            initial="hidden" 
            transition={{ duration: 0.5,
                         delay: 1 }} 
            variants={ { visible: { opacity: 1, x: 0 },
                         hidden: { opacity: 0, x: 75 } 
            }}>

                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
