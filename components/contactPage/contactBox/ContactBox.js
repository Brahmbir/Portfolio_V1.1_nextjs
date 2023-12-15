"use client"
import styles from "@/styles/contactPage/contactBox.module.css"
import { useRef } from "react";
import ContactBG from "@/components/contactPage/contactBG/ContactBG"

const ContantBox = ({ children }) => {
    const carouselRef = useRef(null)

    return (
        <main ref={carouselRef} className={styles.Main} >
            <div className={styles.fornt}>
                {children}
            </div >
            <div className={styles.BG} >
                <ContactBG parentRef={carouselRef} />
            </div>
            <div className={styles.film} >
                <svg viewBox="0 0 100 100" style={{ display: "none" }}>
                    <filter id="grain">
                        <feTurbulence baseFrequency="0.60,0.90" result="colorNoise" />
                        <feColorMatrix in="colorNoise" type="matrix" values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0" />
                        <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
                        <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
                    </filter>
                </svg>

            </div>
        </main >
    );
}

export default ContantBox;
