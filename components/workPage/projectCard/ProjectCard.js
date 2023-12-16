import styles from "./ProjectCard.module.css"
import Link from "next/link";
import { motion as m } from "framer-motion"
import Image from "next/image";

function ProjectCard(props) {
    let link = `/work/${props.id}?projectID=${props.fields.ProjectTableLink[0]}`
    return (
        <m.div initial={{ y: 100, scaleY: 0.8, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, scaleY: 1, opacity: 1 }} className={styles.workCard}>
            <Link href={link} className={styles.workImg} >
                <div className={styles.Pimg}>
                    {props.fields.Image ? <Image fill={true} sizes="50vw" style={{ objectFit: "cover " }} quality={100} src={props.fields.Image[0].url} alt={props.fields.Tittle} /> : "no Image"}
                </div>
            </Link>
            < div className={styles.workDes} >
                <div className={styles.head_tag}>
                    <h3 className={styles.workHead}>
                        {props.fields.Tittle}
                    </h3>
                    <div className={styles.tags}>
                        {props.fields.Tags.map((value, i) => { return <div key={"ff" + i} >{value}</div> })}
                    </div>
                </div>
                <p className={styles.workPara}>
                    {props.fields.Description}
                </p>
                <div className={styles.workBut}>
                    <Link href={link} className={`${styles.workTo} ${styles.wmore}`}>Learn More</Link>
                    {props.fields.Github && <a href={props.fields.Github} target="blank" className={`${styles.workTo} ${styles.wGit}`}>GitHub</a>}
                </div>
            </div >
        </m.div >
    )
}
export const Loading = () => {
    return (
        <m.div
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0.2 }}
            transition={{ delay: 0.3 }}
            className={`${styles.Comp} ${styles.LOAD}`}>
            loading . . .
        </m.div>
    );
}
export const EmptyResult = () => {
    return (
        <m.div
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0.2 }}
            transition={{ delay: 0.3 }}
            className={styles.Comp}>
            No Data Found
        </m.div>
    );
}

export const Error = (props) => {
    return (
        <m.div
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ delay: 0.3 }}
            className={`${styles.Comp}`}>
            Error : {props.error.message}
        </m.div>
    );
}


export default ProjectCard;