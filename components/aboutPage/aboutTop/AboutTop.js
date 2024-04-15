"use client";

import styles from "./AboutTop.module.css";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

import LeftPhoto from "@/public/photos/aboutMe/left.jpg";
import MyPhoto from "@/public/photos/aboutMe/myPhoto.jpg";
import RightPhoto from "@/public/photos/aboutMe/right.jpg";
import { useEffect } from "react";

function getExponentValue(x, maxResult = 50, ZeroValue = 50) {
  let result = Math.abs(Math.cbrt(x)) * maxResult;
  if (x > 0) {
    return ZeroValue + result;
  }
  return ZeroValue - result;
}

const Orientation = {
  isFirstTime: false,
  x: 50,
  y: 50,
  setX: (X) => {
    Orientation.x = (3 * Orientation.x + X) / 4;
  },
  setY: (Y) => {
    Orientation.y = (3 * Orientation.y + Y) / 4;
  },
  setAbsoluteX: (X) => {
    Orientation.x = X;
  },
  setAbsoluteY: (Y) => {
    Orientation.y = Y;
  },
};

function useSpeed(x, y, len) {
  const sx = useSpring(x);
  const sy = useSpring(y);
  return {
    x: useTransform(sx, [0, 100], [-len, len]),
    y: useTransform(sy, [0, 100], [-len, len]),
  };
}

const AboutTop = () => {
  const x = useMotionValue(50);
  const y = useMotionValue(50);

  // const myPhoto = useSpeed(x, y, 6)
  const myPhoto = useSpeed(x, y, 10);

  const leftPhoto = useSpeed(x, y, 5.5);
  const rightPhoto = useSpeed(x, y, 3);

  useEffect(() => {
    function Gmotion(event) {
      if (Orientation.isFirstTime) {
        Orientation.x = event.alpha;
        Orientation.y = event.beta;
        Orientation.isFirstTime = true;
      }

      let xRot = (event.alpha % 90) / 90;
      let yRot = (event.beta % 90) / 90;
      console.log(xRot);

      Orientation.setX(getExponentValue(xRot));
      Orientation.setY(getExponentValue(yRot));

      console.log(Orientation);

      x.set(Orientation.x);
      y.set(Orientation.y);
    }

    if (window.DeviceMotionEvent) {
      window.addEventListener("deviceorientation", Gmotion);
    }

    const mouseMoveHandler = (event) => {
      Orientation.setAbsoluteY((event.clientY / window.innerHeight) * 100);
      Orientation.setAbsoluteX((event.clientX / window.innerWidth) * 100);

      x.set(Orientation.x);
      y.set(Orientation.y);
    };
    const mouseLeaveHandler = () => {
      y.set(50);
      x.set(50);

      Orientation.setAbsoluteY(50);
      Orientation.setAbsoluteX(50);

      x.set(Orientation.x);
      y.set(Orientation.y);
    };
    document.body.addEventListener("mousemove", mouseMoveHandler);
    document.body.addEventListener("mouseleave", mouseLeaveHandler);

    return () => {
      document.body.removeEventListener("mousemove", mouseMoveHandler);
      document.body.removeEventListener("mouseleave", mouseLeaveHandler);
      if (window.DeviceMotionEvent) {
        window.removeEventListener("deviceorientation", Gmotion);
      }
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, type: "tween" }}
      className={styles.top}
    >
      <div className={styles.contain}>
        <div className={styles.col}>
          <motion.div
            // transition={{ type: "tween" }}
            transition={{ type: "spring", stiffness: 100 }}
            style={{
              x: leftPhoto.x,
              y: leftPhoto.y,
            }}
            className={`${styles.ICont} ${styles.FF}`}
          >
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill={true}
              src={LeftPhoto}
              alt="left"
            />
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
            className={`${styles.ICont} ${styles.MM}`}
          >
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill={true}
              placeholder="blur"
              priority
              src={MyPhoto}
              alt="Brahmbir Singh"
            />
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
            className={`${styles.ICont} ${styles.SS}`}
          >
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill={true}
              src={RightPhoto}
              alt="landscape"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
export default AboutTop;
