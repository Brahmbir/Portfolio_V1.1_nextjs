"use client"
import { motion } from "framer-motion"
import { PiFileDashedThin, PiCodeThin, PiCompassToolThin } from "react-icons/pi"
import styles from "./AboutSkills.module.css"

const AboutSkills = () => {
    return (
        <section
            className={styles.sect}>
            <motion.span initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 1 }} className={styles.line} ></motion.span>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}>
                <h2 className={styles.heading} > Technologies</h2>
                <p className={styles.para}>
                    I&apos;ve worked with a range a technologies in software development
                    world. From Back-end to Design
                </p>
            </motion.div>
            <div className={styles.SkillArea}>
                <Acard icon={<PiFileDashedThin />} tittle="Libraries \ Frameworks" >
                    Experience with Next.js <br />
                    React.js, openGL, Express.js, <br />
                    Famer-Motion.js, MongoDB<br />
                    & Prisma
                </Acard>
                <Acard icon={<PiCodeThin />} tittle="Languages">
                    Experience with Python, <br />
                    Rust, TypeScript, C++ <br />
                    MYSQL, C #, Java<br />
                    HTML5, CSS3 <br />
                    & JavaScript
                </Acard>
                <Acard icon={<PiCompassToolThin />} tittle="Tools">
                    Experience with tools <br />
                    like VS Code, Blender,<br />
                    Godot, Unreal Engin <br />
                    & Git
                </Acard>
            </div>
        </section>
    );
}
function Acard({ icon, tittle, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }} className={styles.cc}>
            {icon}
            <h3>{tittle}</h3>
            <p>{children}</p>
        </motion.div>
    )
}
export default AboutSkills;
