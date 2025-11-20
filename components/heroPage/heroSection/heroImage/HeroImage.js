"use client";
import styles from "./HeroImage.module.css";
import Image from "next/image";
import Photo from "@/public/photos/applications.webp";
import { motion } from "framer-motion";

import {
  SiPython,
  SiRust,
  SiReact,
  SiGodotengine,
  SiBlender,
} from "react-icons/si";

const HeroImage = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.25 }}
      className={styles.half}
    >
      <SiPython className={`${styles.bgsvg} ${styles.py}`} />
      <SiRust className={`${styles.bgsvg} ${styles.rust}`} />
      <SiReact className={`${styles.bgsvg} ${styles.react}`} />
      <SiGodotengine className={`${styles.bgsvg} ${styles.godot}`} />
      <SiBlender className={`${styles.bgsvg} ${styles.blender}`} />
      <svg className={styles.svg}>
        <defs>
          <clipPath clipPathUnits="objectBoundingBox" id="clip">
            <path
              transform="scale(0.01245, 0.00845)"
              id="rect1"
              d="M34.4403 4.0355h10.4943s2.6236 0 2.6236 2.7281v40.7124s0 2.7281 -2.6236 2.7281h-10.4943s-2.6236 0 -2.6236 -2.7281v-40.7124s0 -2.7281 2.6236 -2.7281"
            />
            <path
              transform="scale(0.01245, 0.00845)"
              id="rect2"
              d="M34.4372 51.6558h10.5007s2.6252 0 2.6252 2.3529v11.0453s0 2.3529 -2.6252 2.3529h-10.5007s-2.6252 0 -2.6252 -2.3529v-11.0453s0 -2.3529 2.6252 -2.3529"
            />
            <path
              transform="scale(0.01245, 0.00845)"
              id="rect3"
              d="M34.4429 68.8623h10.4892s2.6223 0 2.6223 3.0565v40.0479s0 3.0565 -2.6223 3.0565h-10.4892s-2.6223 0 -2.6223 -3.0565v-40.0479s0 -3.0565 2.6223 -3.0565"
            />
            <path
              transform="scale(0.01245, 0.00845)"
              id="rect4"
              d="M51.8595 14.6215h7.406s2.8422 0 2.8422 2.7266v15.5745s0 2.7266 -2.8421 2.7266h-7.406s-2.8421 0 -2.8421 -2.7266v-15.5745s0 -2.7266 2.8422 -2.7266"
            />
            <path
              transform="scale(0.01245, 0.00845)"
              id="rect5"
              d="M51.4228 37.1068h16.2168s2.4098 0 2.4098 2.8253v20.6775s0 2.8253 -2.4098 2.8253h-16.2168s-2.4098 0 -2.4098 -2.8253v-20.6775s0 -2.8253 2.4098 -2.8253"
            />
            <path
              transform="scale(0.01245, 0.00845)"
              id="rect6"
              d="M51.8782 64.8914h23.2435s2.8618 0 2.8618 2.6336v22.3771s0 2.6336 -2.8618 2.6336h-23.2435s-2.8618 0 -2.8618 -2.6336v-22.3771s0 -2.6336 2.8618 -2.6336"
            />
            <path
              transform="scale(0.01245, 0.00845)"
              id="rect7"
              d="M51.8346 93.997h6.1329s2.8167 0 2.8167 2.7918v3.5369s0 2.7918 -2.8167 2.7918h-6.1329s-2.8167 0 -2.8167 -2.7918v-3.5369s0 -2.7918 2.8167 -2.7918"
            />
            <path
              transform="scale(0.01245, 0.00845)"
              id="rect8"
              d="M18.2532 14.6049h9.7956s2.3254 0 2.3254 1.9268v10.5929s0 1.9268 -2.3254 1.9268h-9.7956s-2.3254 0 -2.3254 -1.9268v-10.5929s0 -1.9268 2.3254 -1.9268"
            />
            <path
              transform="scale(0.01245, 0.00845)"
              id="rect9"
              d="M6.7062 30.4929h20.9835s2.6716 0 2.6716 2.601v21.1249s0 2.601 -2.6716 2.601h-20.9835s-2.6716 0 -2.6716 -2.601v-21.1249s0 -2.601 2.6716 -2.601"
            />
            <path
              transform="scale(0.01245, 0.00845)"
              id="rect10"
              d="M17.3667 58.2764h10.2458s2.7465 0 2.7465 2.7103v16.9328s0 2.7103 -2.7465 2.7103h-10.2458s-2.7465 0 -2.7465 -2.7103v-16.9328s0 -2.7103 2.7465 -2.7103"
            />
            <path
              transform="scale(0.01245, 0.00845)"
              id="rect12"
              d="M8.9301 82.0788h19.1815s2.2575 0 2.2575 2.3942v3.0331s0 2.3942 -2.2575 2.3942h-19.1815s-2.2575 0 -2.2575 -2.3942v-3.0331s0 -2.3942 2.2575 -2.3942"
            />
            <path
              transform="scale(0.01245, 0.00845)"
              id="rect11"
              d="M17.5648 91.3587h9.8495s2.9353 0 2.9353 3.2838v15.7671s0 3.2838 -2.9353 3.2838h-9.8495s-2.9353 0 -2.9353 -3.2838v-15.7671s0 -3.2838 2.9353 -3.2838"
            />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.Ibox}>
        <div className={styles.imgCont}>
          {children || (
            <Image
              style={{ objectFit: "cover" }}
              placeholder="blur"
              src={Photo}
              sizes="50vw"
              fill
              alt="picture of Brahmbir singh"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroImage;
