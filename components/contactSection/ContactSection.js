import { GoArrowUpRight } from "react-icons/go"
import { PiFilePdfThin } from "react-icons/pi"

import styles from "./contactSection.module.css"
import ContactPageFooter from "@/components/contactComponent/footer/Footer"

const ContactSection = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.letsT} >
                <svg className={styles.lets_talk} viewBox="0 0 300 43" >
                    <foreignObject width="100%" height="100%" overflow="visible">
                        <div className={styles.letText}>
                            <p className={styles.text}>let&apos;s talk</p>
                            <svg
                                className={styles.star}
                                viewBox="0 0 30 30"
                                id="svg5">
                                <g id="layer1" transform="translate(5.9536853e-4,5.9592543e-4)">
                                    <path
                                        style={{
                                            display: "inline",
                                            opacity: 1,
                                            fill: "#4e4cb8",
                                            fillOpacity: 1,
                                            stroke: "#0e1015",
                                            strokeWidth: "1.08276",
                                            strokeDasharray: "none",
                                            strokeOpacity: 1,
                                            paintOrder: "markers fill stroke"
                                        }}
                                        id="path13937"
                                        d="m 79.631861,51.198522 2.297173,11.129029 -9.319675,-6.501996 -2.136585,11.160972 -6.12205,-9.573546 -6.245066,9.493758 -1.9924,-11.187611 -9.402792,6.381206 2.440576,-11.098463 -11.129029,2.297173 6.501996,-9.319675 -11.160973,-2.136584 9.573547,-6.122051 -9.493759,-6.245066 11.187611,-1.992399 -6.381206,-9.402793 11.098463,2.440576 -2.297172,-11.129029 9.319675,6.501996 2.136584,-11.1609722 6.122051,9.5735462 6.245065,-9.4937583 1.9924,11.1876113 9.402792,-6.3812064 -2.440576,11.0984634 11.12903,-2.297173 -6.501997,9.319675 11.160973,2.136584 -9.573547,6.122051 9.493759,6.245066 -11.187611,1.992399 6.381206,9.402793 z"
                                        transform="matrix(0.46085683,-0.00102412,0.00104165,0.46085563,-14.757907,-1.460069)"
                                    />
                                    <path
                                        style={{
                                            opacity: 1,
                                            fill: "none",
                                            fillOpacity: 1,
                                            stroke: "#e5dfd9",
                                            strokeWidth: "1.08179",
                                            strokeDasharray: "none",
                                            strokeOpacity: 1,
                                            paintOrder: "markers fill stroke"
                                        }}
                                        id="path741"
                                        d="m 79.631861,51.198522 2.297173,11.129029 -9.319675,-6.501996 -2.136585,11.160972 -6.12205,-9.573546 -6.245066,9.493758 -1.9924,-11.187611 -9.402792,6.381206 2.440576,-11.098463 -11.129029,2.297173 6.501996,-9.319675 -11.160973,-2.136584 9.573547,-6.122051 -9.493759,-6.245066 11.187611,-1.992399 -6.381206,-9.402793 11.098463,2.440576 -2.297172,-11.129029 9.319675,6.501996 2.136584,-11.1609722 6.122051,9.5735462 6.245065,-9.4937583 1.9924,11.1876113 9.402792,-6.3812064 -2.440576,11.0984634 11.12903,-2.297173 -6.501997,9.319675 11.160973,2.136584 -9.573547,6.122051 9.493759,6.245066 -11.187611,1.992399 6.381206,9.402793 z"
                                        transform="matrix(0.43013304,-9.5584133e-4,9.7220275e-4,0.43013192,-12.774047,-0.36273109)"
                                    />
                                    <path
                                        style={{
                                            opacity: 1,
                                            fill: "#4e4cb8",
                                            fillOpacity: 1,
                                            fillRule: "nonzero",
                                            stroke: "#0e1015",
                                            strokeWidth: "0.325955",
                                            strokeDasharray: "none",
                                            strokeOpacity: 1,
                                            paintOrder: "markers fill stroke"
                                        }}
                                        id="path10380"
                                        d="m 14.582658,10.02605 c -0.03023,-5.4905836 -6.84166,6.458609 -2.10179,3.687139 4.73987,-2.771471 -9.01415,-2.695747 -4.2440511,0.02337 4.7700991,2.719112 -2.1724901,-9.1543565 -2.1422611,-3.663773 0.030229,5.490583 6.8416602,-6.45861 2.1017899,-3.6871394 -4.73987,2.7714706 9.0141503,2.6957465 4.2440513,-0.023366 -4.7700992,-2.7191126 2.17249,9.1543564 2.142261,3.6637734 z"
                                        transform="matrix(1.1345231,0.00689696,-0.00697707,1.174465,3.3407711,3.1259854)"
                                    />
                                </g>
                            </svg>
                        </div>
                    </foreignObject>
                </svg>

            </div>
            <div className={styles.condetail}>
                <div className={styles.ranleft}>
                    <p>
                        Feeling strong ?
                        <br />
                        Let&apos;s work together !
                    </p>
                    <div className={styles.emailCo}>
                        <a href="mailto:brahmbir68@gmail.com">brahmbir68@gmail.com</a>
                        <a className={styles.ResuLink} href="/Brahmbir's resume.pdf" target="_blank" rel="noopener noreferrer">My Resume <PiFilePdfThin /> </a>

                    </div>
                </div>
                <div className={`${styles.linkList} ${styles.ranlink}`}>
                    <a target="_blank" href={process.env.LINKEDIN}>
                        <GoArrowUpRight />
                        <p>LinkedIn</p>
                    </a>
                    <a target="_blank" href={process.env.GITHUB}>
                        <GoArrowUpRight />
                        <p>Github</p>
                    </a>
                    <a target="_blank" href={process.env.INSTAGRAM}>
                        <GoArrowUpRight />
                        <p>Instagram</p>
                    </a>
                </div>
            </div>
            <ContactPageFooter className={styles.footer} />
        </section>
    );
}

export default ContactSection;