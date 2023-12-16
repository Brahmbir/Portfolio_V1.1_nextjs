import styles from "./WorkSect.module.css"
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go"

import WorkCard from "./WorkCard";
import WorkLink from "./WorkLink";

const WorkSect = ({workdata}) => {
    
    return (
        <section className={styles.sect}>
            <h2> MY PAST <br /> PROJECT</h2>
            <div className={styles.workArea} >
                {workdata.length != 0 && workdata != "error" ?
                    workdata.map((data, i) =>
                        <WorkCard key={"homePageWorkKey_" + i} {...data}
                        />)
                    : workdata == "error" ? <div className={styles.card} style={{ justifyContent: "center", alignItems: "center" }}>
                        <p style={{ fontSize: "1.5em", width: "fit-content" }}> Can&apos;t get the Data from DB </p>
                    </div>
                        : <div className={styles.card} style={{ justifyContent: "center", alignItems: "center" }}>
                            <p style={{ fontSize: "1.5em", width: "fit-content" }}> Working on it </p>
                        </div>}
            </div>
            {/* <div> */}
            <WorkLink>
                <Link href={"/work"} className={styles.but} >
                    <p>ALL CASE STUDIES</p>
                    <GoArrowUpRight />
                </Link>
            </WorkLink>
            {/* </div> */}
        </section>
    );
}
export default WorkSect;