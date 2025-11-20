"use client";
import styles from "@/styles/contactPage/contactBox.module.css";
import { useRef } from "react";
import ContactBG from "@/components/contactPage/contactBG/ContactBG";

const ContantBox = ({ children }) => {
  const carouselRef = useRef(null);

  return (
    <>
      <div className={styles.Main} ref={carouselRef}>
        <div className={styles.fornt}>{children}</div>
      </div>
      <div className={`${styles.BG} ${styles.film}`}>
        <span className={styles.topbar}></span>
        <span className={styles.Sbar}></span>
        <span className={styles.Sbar + " " + styles.rigthbar}></span>

        <svg viewBox="0 0 100 100" style={{ display: "none" }}>
          <filter id="grain">
            <feTurbulence baseFrequency="0.60,0.90" result="colorNoise" />
            <feColorMatrix
              in="colorNoise"
              type="matrix"
              values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
            />
            <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
            <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
          </filter>
        </svg>
        <ContactBG parentRef={carouselRef} />
      </div>
    </>
  );
};

export default ContantBox;
