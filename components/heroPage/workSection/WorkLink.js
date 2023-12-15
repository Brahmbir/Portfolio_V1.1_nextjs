"use client"
import { motion } from "framer-motion";

const WorkLink = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(7.5px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 1 }}
            transition={{ type: "tween", duration: 0.3 }}>
            {children}
        </motion.div>
    );
}

export default WorkLink;
