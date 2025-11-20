import styles from "./ProjectCard.module.css";
import Link from "next/link";
import { motion as m } from "framer-motion";
import Image from "next/image";

function ProjectCard(props) {
  let link = `/work/${props.id}`;
  return (
    <m.div
      initial={{ y: 100, scaleY: 0.8, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, scaleY: 1, opacity: 1 }}
      className={styles.workCard}
    >
      <div className={styles.workarea}>
        <div className={styles.center}>
          <Link href={link} className={styles.workImg}>
            <div className={styles.Pimg}>
              {props.Image ? (
                <Image
                  fill={true}
                  sizes="50vw"
                  style={{ objectFit: "cover " }}
                  quality={100}
                  src={props.Image[0].url}
                  alt={props.Image[0].name}
                />
              ) : (
                "no Image"
              )}
            </div>
          </Link>
        </div>
        <div className={styles.workDes}>
          <div className={styles.head_tag}>
            <h3 className={styles.workHead}>{props.Tittle}</h3>
            <div className={styles.tags}>
              {props.Tags.map((value, i) => {
                return <div key={"ff" + i}>{value}</div>;
              })}
            </div>
          </div>
          <p className={styles.workPara}>{props.Description}</p>
          <div className={styles.workBut}>
            <Link href={link} className={`${styles.workTo} ${styles.wmore}`}>
              Learn More
            </Link>
            {props.Github && (
              <a
                href={props.Github}
                target="blank"
                className={`${styles.workTo} ${styles.wGit}`}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </m.div>
  );
}
export const Loading = () => {
  return (
    <m.div
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0.2 }}
      transition={{ delay: 0.3 }}
      className={`${styles.Comp} ${styles.LOAD}`}
    >
      loading . . .
    </m.div>
  );
};
export const EmptyResult = () => {
  return (
    <m.div
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0.2 }}
      transition={{ delay: 0.3 }}
      className={styles.Comp}
    >
      No Data Found
    </m.div>
  );
};

export const Error = (props) => {
  return (
    <m.div
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0, opacity: 0 }}
      transition={{ delay: 0.3 }}
      className={`${styles.Comp}`}
    >
      Error : {props.error.message}
    </m.div>
  );
};

export default ProjectCard;
