import styles from "./footer.module.css"
import Logo from "@/components/logo/Logo";

import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai"
import { BiLogoLinkedin } from "react-icons/bi"

const ContactPageFooter = ({ className }) => {
    return (

        <footer className={`${styles.footer} ${className}`}>
            <ul className={styles.links}>
                <li>
                    <a href={process.env.INSTAGRAM} >
                        {/* Instagram */}
                        <AiOutlineInstagram className={styles.icon} />
                    </a>
                </li>
                <li>
                    <a href={process.env.LINKEDIN}>
                        {/* Linkedin */}
                        <BiLogoLinkedin className={styles.icon} />
                    </a>
                </li>
                <li>
                    <a href={process.env.GITHUB}>
                        {/* Github */}
                        <AiOutlineGithub className={styles.icon} />
                    </a>
                </li>
            </ul>
            <div className={styles.copyright}> ©️2025 Made by Brahm_bir</div>
            <Logo className={styles.logo} />
        </footer>
    );
}

export default ContactPageFooter;
