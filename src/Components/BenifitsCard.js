import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function BenifitsCard(props) {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 70 },
  };

  return (
    <motion.div
      ref={ref}
      className="card"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1 }}
    >
      <h2>{props.heading}</h2>
      <p>{props.para}</p>
    </motion.div>
  );
}
