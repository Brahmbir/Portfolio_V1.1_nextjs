import { GithubLink, LinkedinLink, InstagramLink } from "@/app/const";
import styles from "./footer.module.css";
import Logo from "@/components/logo/Logo";

import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const ContactPageFooter = ({ className }) => {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <ul className={styles.links}>
        <li>
          <a href={InstagramLink}>
            {/* Instagram */}
            <AiOutlineInstagram className={styles.icon} />
          </a>
        </li>
        <li>
          <a href={LinkedinLink}>
            {/* Linkedin */}
            <BiLogoLinkedin className={styles.icon} />
          </a>
        </li>
        <li>
          <a href={GithubLink}>
            {/* Github */}
            <AiOutlineGithub className={styles.icon} />
          </a>
        </li>
      </ul>
      <div className={styles.copyright}>
        ©️{new Date().getFullYear()} Made by Brahm_bir
      </div>
      <Logo className={styles.logo} />
    </footer>
  );
};

export default ContactPageFooter;
