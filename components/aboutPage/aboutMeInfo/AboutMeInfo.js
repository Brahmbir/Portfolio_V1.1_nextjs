"use client";

import ExpSection, { MeParas } from "../aboutMe/AboutMe";
import Skill, { SkParas } from "../aboutSkills/AboutSkills";
import { motion } from "framer-motion";

import styles from "./AboutMeInfo.module.css";

const AboutMeInfo = () => {
  return (
    <div className={styles.group}>
      <AboutSection tittle={"About Me"} paras={MeParas()}>
        <ExpSection />
      </AboutSection>
      <AboutSection tittle={"Technologies"} paras={SkParas()}>
        <Skill />
      </AboutSection>
    </div>
  );
};

function AboutSection({ tittle, paras, children }) {
  return (
    <section className={styles.sect}>
      <motion.span
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 1 }}
        className={styles.line}
      ></motion.span>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={styles.heading}> {tittle}</h2>
        <div className={styles.paras}>{paras}</div>
      </motion.div>
      {children}
    </section>
  );
}
export default AboutMeInfo;
