import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function PromotionsPoster() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
               
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null, 
                rootMargin: '0px',
                threshold: 0.4 
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if(ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]); 

    return (
        <div className="promotions--section">
            <motion.div 
                className="promotions--image"
                ref={ref}
                initial={{ opacity: 0, scale: 0.65 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.65 }}
                transition={{ duration: 0.5 }}
            >
               
            </motion.div>
        </div>
    );
}

