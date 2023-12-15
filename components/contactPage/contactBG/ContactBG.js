"use client"
import useAnimateBall from "@/components/contactPage/hooks/useAnimateBall"
import styles from "@/styles/contactPage/contactBox.module.css"

import { motion } from "framer-motion"

const ContactBG = ({ parentRef }) => {
    const Position1Y = useAnimateBall(parentRef, ["-10%", "150vh"])
    const Position2Y = useAnimateBall(parentRef, ["30vh", "50vh"])
    const Position3Y = useAnimateBall(parentRef, ["200vh", "-30vh"])
    const Position4Y = useAnimateBall(parentRef, ["90vh", "10vh"])

    return (
        <>
            <motion.div id={styles["backBall0"]} transition={{ duration: 0.3 }} initial={{ opacity: 0, y: "-100%" }} animate={{ opacity: 0.7, y: "-10%" }} style={{ x: "-10%", y: Position1Y }} />
            <motion.div id={styles["backBall1"]} transition={{ duration: 2 }} initial={{ opacity: 0, y: "75vh" }} animate={{ opacity: 0.5, y: "30vh" }} style={{ x: "calc(100vw - 50%)", y: Position2Y }} />
            <motion.div id={styles["backBall3"]} transition={{ duration: 0.5 }} initial={{ opacity: 0, y: "80vh" }} animate={{ opacity: 0.4, y: "200vh" }} style={{ x: "calc(60vw - 50%)", y: Position3Y }} />
            <motion.div id={styles["backBall4"]} transition={{ duration: 0.5 }} initial={{ opacity: 0, y: "40vh" }} animate={{ opacity: 0.4, y: "90vh" }} style={{ x: "calc(32.5vw - 50%)", y: Position4Y }} />

        </>
    );
}
export default ContactBG;
