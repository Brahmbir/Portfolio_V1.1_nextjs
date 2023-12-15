"use client"
import styles from "./ExpCard.module.css"
import { motion } from "framer-motion";

function ExpCard({ data = "", children }) {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ amount: 0.6, once: true }}
            className={styles.Ecard} >
            <h3>{data} <span /> </h3>
            <p>
                {children}
            </p>

        </motion.div>
    );
}
export default ExpCard;
