import price from '../../Images/Price (2).png';
import prices from '../../Images/Price.png';
import { motion } from "framer-motion";

export default function PriceHeader() {
    return (
        // <div> 
        //     <img src={price} className="servicesImg"/>
        //     <h1 className="servives-heading">Our Prices</h1>
        // </div>
        <motion.div 
            className="main--image--prices"
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
                    <span>PRICES</span>
                </motion.h1>
                <motion.span
                    className="cen-prices"
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 0.4 }}
                >
                    Get the most affordable prices
                </motion.span>
            </div>
        </motion.div>
    
    )
}