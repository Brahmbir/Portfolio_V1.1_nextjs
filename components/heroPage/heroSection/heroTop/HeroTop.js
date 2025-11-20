"use client";
import { ResumeLink } from "@/app/const";
import HeadStyles from "./HeroTop.module.css";
import ParaStyles from "./Para.module.css";

import { motion } from "framer-motion";

import Link from "next/link";

const HeroTop = () => {
  return (
    <div className={HeadStyles.body}>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={HeadStyles.into}
      >
        <span>Hello! </span>
        <h1>I&apos;m Brahmbir Singh </h1>
        <div>
          <h2>I&apos;m a</h2>
          <div className={HeadStyles.Tanime}>
            <div>
              <h2>Software Developer</h2>
            </div>
            <div>
              <h2>Web Developer</h2>
            </div>
            <div>
              <h2>Game Developer</h2>
            </div>
            <div>
              <h2>Software Developer</h2>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.3 }}
        className={ParaStyles.Para}
      >
        <div>
          <p>
            My curiosity drives me to embrace challenges and continuously grow
            in the ever-evolving world of software development. Let&apos;s
            collaborate and build something extraordinary together!
          </p>
          <div className={ParaStyles.but}>
            <Link className={ParaStyles.talkLink} href="/contact">
              Let&apos;s Talk
            </Link>
            <a
              className={ParaStyles.ResuLink}
              href={ResumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroTop;
