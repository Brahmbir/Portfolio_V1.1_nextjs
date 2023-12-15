"use client"

import styles from "./AboutTop.module.css"
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

import LeftPhoto from "@/public/photos/aboutMe/left.jpg"
import MyPhoto from "@/public/photos/aboutMe/myPhoto.jpg"
import RightPhoto from "@/public/photos/aboutMe/right.jpg"

function useSpeed(x, y, len) {
    const sx = useSpring(x)
    const sy = useSpring(y)
    return { x: useTransform(sx, [0, 100], [-len, len]), y: useTransform(sy, [0, 100], [-len, len]) }
}


const AboutTop = () => {
    const x = useMotionValue(50)
    const y = useMotionValue(50)

    // const myPhoto = useSpeed(x, y, 6)
    const myPhoto = useSpeed(x, y, 10)

    const leftPhoto = useSpeed(x, y, 5.5)
    const rightPhoto = useSpeed(x, y, 3)

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(((event.clientX - rect.left) / rect.width) * 100);
        y.set(((event.clientY - rect.top) / rect.height) * 100);
    }
    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "tween" }}
            onMouseMove={(e) => handleMouse(e)}
            onMouseLeave={() => { x.set(50); y.set(50); }}
            className={styles.top}>

            <div className={styles.contain} >
                <div className={styles.col}>
                    <motion.div
                        // transition={{ type: "tween" }}
                        transition={{ type: "spring", stiffness: 100 }}
                        style={{
                            x: leftPhoto.x,
                            y: leftPhoto.y,
                        }} className={`${styles.ICont} ${styles.FF}`}>
                        <Image
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fill={true}

                            src={LeftPhoto}
                            alt="left" />

                    </motion.div>
                </div>

                <div className={styles.col}>
                    <motion.div
                        // transition={{ type: "tween" }}
                        transition={{ type: "spring", stiffness: 100 }}
                        style={{
                            x: myPhoto.x,
                            y: myPhoto.y,
                        }}
                        className={`${styles.ICont} ${styles.MM}`}>
                        <Image
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fill={true}
                            placeholder="blur"
                            priority
                            src={MyPhoto}
                            alt="Brahmbir Singh" />
                    </motion.div>
                </div>
                <div className={styles.col}>
                    <motion.div
                        // transition={{ type: "tween" }}
                        transition={{ type: "spring", stiffness: 100 }}
                        style={{
                            x: rightPhoto.x,
                            y: rightPhoto.y,
                        }}
                        className={`${styles.ICont} ${styles.SS}`}>
                        <Image
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fill={true}
                            src={RightPhoto}
                            alt="landscape" />
                    </motion.div>
                </div>
            </div>
        </motion.section >
    );
}
export default AboutTop;