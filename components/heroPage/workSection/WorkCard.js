"use client";
import styles from "./WorkSect.module.css";

import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import Image from "next/image";

const WorkCard = (data) => {
  let link = `/work/${data.id}`;
  return (
    <motion.div
      initial={{ x: 200, opacity: 0, filter: "blur(7.5px)" }}
      whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "tween", duration: 0.3 }}
      className={styles.card}
    >
      <div className={styles.noImg}>
        <div className={styles.head}>
          <h3>{data.Tittle}</h3>
          <div className={styles.tag}>
            {data.Tags.map((item, i) => (
              <span key={"qwe" + i}>{item}</span>
            ))}
          </div>
        </div>
        <p className={styles.desc}>{data.Description}</p>
        <Link href={link} className={styles.link}>
          <p>Learn More</p>
          <GoArrowUpRight className={styles.icon} />
        </Link>
      </div>
      <div className={styles.image}>
        <div className={styles.imgNEXT}>
          {data.Image && (
            <Image
              fill={true}
              sizes="50vw"
              src={data.Image[0].url}
              alt={data.Image[0].name}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
