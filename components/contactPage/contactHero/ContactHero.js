import styles from "./contactHero.module.css";
import Image from "next/image";

const ContactTop = () => {
  return (
    <section className={styles.contsectDetail}>
      <h2>CONTACT</h2>

      <div className={styles.emailcosect}>
        <p>
          I am always open to discussing new projects or creative ideas. Also,
          if you have any question, or you want say &apos;Hey&apos;. So, feel
          free to get in touch with me.
        </p>
      </div>
      <div className={styles.reachme}>
        <h3>Reach me out</h3>
        <div className={styles.linkreach}>
          <a href="mailto:brahmbir68@gmail.com" className={styles.linkbar}>
            <div className={styles.img}>
              <Image fill={true} src="logo.svg" alt="logo" />
            </div>
            <h3>brahmbir68@gmail.com</h3>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactTop;
