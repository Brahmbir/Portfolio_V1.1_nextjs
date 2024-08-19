"use client";
import useAnimateBall from "@/components/contactPage/hooks/useAnimateBall";
import styles from "@/styles/contactPage/contactBox.module.css";

import { motion } from "framer-motion";

const ContactBG = ({ parentRef }) => {
  const Position1Y = useAnimateBall(parentRef, ["-5.5em", "100em"]);
  const Position2Y = useAnimateBall(parentRef, ["10em", "50em"]);
  const Position3Y = useAnimateBall(parentRef, ["200em", "-30em"]);
  const Position4Y = useAnimateBall(parentRef, ["90em", "10em"]);

  return (
    <>
      <motion.div
        id={styles["backBall0"]}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: "-100em" }}
        animate={{ opacity: 0.7, y: "-5.5em" }}
        style={{ x: "-1em", y: Position1Y }}
      />
      <motion.div
        id={styles["backBall1"]}
        transition={{ duration: 2 }}
        initial={{ opacity: 0, y: "75em" }}
        animate={{ opacity: 0.5, y: "10em" }}
        style={{ right: 0, x: "20em", y: Position2Y }}
      />
      <motion.div
        id={styles["backBall3"]}
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, y: "80em" }}
        animate={{ opacity: 0.4, y: "200em" }}
        style={{ x: "calc(20em)", y: Position3Y }}
      />

      <motion.div
        id={styles["backBall4"]}
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, y: "40em" }}
        animate={{ opacity: 0.4, y: "90em" }}
        style={{ x: "calc(50em)", y: Position4Y }}
      />
    </>
  );
};
export default ContactBG;
