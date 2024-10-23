import styles from "./AboutSect.module.css";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { TfiLocationPin } from "react-icons/tfi";

const AboutSect = () => {
  return (
    <section className={styles.sect}>
      <div className={styles.body}>
        <div className={styles.link}>
          <Link href={"/about"} className={styles.button}>
            <p>MORE ABOUT ME</p>
            <GoArrowUpRight className={styles.icon} />
          </Link>
        </div>
        <div className={styles.read}>
          <h3> ABOUT ME</h3>
          <p>
            Hello there! I&apos;m a passionate and motivated software developer
            student on an exciting journey to mastering the art of coding. With
            a relentless curiosity for all things tech, I thrive in tackling
            complex challenges and creating elegant solutions.
          </p>
          <p>
            My love for programming began at a young age, and I&apos;ve been
            honing my skills ever since. As a quick learner, I enjoy exploring
            new technologies and languages to broaden my expertise.
          </p>
          <p>
            As I pursue my education in software development, I aspire to make a
            positive impact on the world through innovative and user-centric
            applications.
          </p>
          <div className={styles.tagArea}>
            <Point Icon={TfiLocationPin} data="Amritsar, punjab" />
          </div>
        </div>
      </div>
    </section>
  );
};

function Point({ Icon, data = "" }) {
  return (
    <div className={styles.infoPoint}>
      {Icon && <Icon />}
      <p>{data}</p>
    </div>
  );
}

export default AboutSect;
