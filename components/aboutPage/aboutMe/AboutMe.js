"use client";
import { motion } from "framer-motion";
import ExpCard from "./expCard/ExpCard";
import styles from "./AboutMe.module.css";

export const MeParas = () => {
  return (
    <>
      <Animate_p>
        Hey! I&apos;m Brahmbir singh, Software Developer living in Amritsar. I
        focus on connection and actually prefer working in group settings
        (shocker).
      </Animate_p>
      <Animate_p>
        Currently pursuing my studies in software development I also possess
        skills in Rust, Python, JavaScript, and C++, enabling me to tackle a
        wide range of projects and challenges.. I find joy in crafting
        responsive, user-friendly, and visually appealing web applications using
        React.js and Next.js.
      </Animate_p>
      <Animate_p>
        In addition to my coding pursuits, I indulge in game development as a
        hobby, exploring the realms of creativity and interactivity. My
        determination to learn and adapt to emerging technologies fuels my
        constant drive to excel in the ever-evolving world of software
        development.
      </Animate_p>
      <Animate_p>
        Committed to writing clean code, providing exceptional user experiences,
        and staying updated with industry trends for innovative solutions.
      </Animate_p>
    </>
  );
};

function Animate_p({ children }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.p>
  );
}

export default function ExpSection() {
  return (
    <div className={styles.Econt}>
      <div className={styles.expArea}>
        <ExpCard data="October 2025">
          Full Stack Developer at <strong>SuperHumanRace</strong> – New Delhi
        </ExpCard>
        <ExpCard data="July 2025">
          Passed GNDU for a B.tech <br /> in Computer Science
        </ExpCard>
        <ExpCard data="March 2021">Passed my 12th standard</ExpCard>
        <ExpCard data="March 2019">Passed my 10th standard</ExpCard>
      </div>
    </div>
  );
}
