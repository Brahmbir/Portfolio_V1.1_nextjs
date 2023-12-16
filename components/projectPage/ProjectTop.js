import Image from 'next/image';
import styles from "./ProjectTop.module.css"
import IMG from "./img.module.css"

function ProjectTop({ data }) {
    return (
        <div className={styles.proDetail}>
            <div className={`${styles.img}`}>
                <div className={` ${IMG.imgback}`}>
                    <div className={styles.Icont}>
                        {data.Image && <Image objectFit='contain' fill={true} src={data.Image[0].url} alt={data.Tittle} />}
                    </div>
                </div>
            </div>
            <div className={styles.proDD}>
                <h2>{data.Tittle}</h2>
                <div className={styles.detail}>
                    <div className={styles.Dlist}>
                        <h3 className={styles.Dlabel}>Roles</h3>
                        <p>{data.Roles}</p>
                    </div>
                    <div className={`${styles.Dlist} ${styles.mar}`}>
                        <h3 className={`${styles.Dlabel}`}>Language / Framework</h3>
                        <div className={styles.Dtag}>
                            {data.Language_Framework.map((value, i) => <span key={"L_F" + i} >{value}</span>)}
                        </div>
                    </div>
                    <div className={styles.Dlist}>
                        <h3 className={styles.Dlabel}>Tools</h3>
                        <div className={styles.Dtag}>
                            {data.Tools.map((value, i) => <span key={"TOOL" + i} >{value}</span>)}
                        </div>
                    </div>
                </div>
                <div className={styles.link}>
                    {data.LiveLink && <a className={styles.Live} target='_blank' href={data.LiveLink}><span>Live Demo</span></a>}
                    {data.Github && <a className={styles.Git} target='_blank' href={data.Github}><span>Github</span></a>}
                </div>
            </div>
        </div>
    );
}

export default ProjectTop;
