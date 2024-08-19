import styles from "@/styles/workPage/Work.module.css";
import FilterComponenet from "@/components/workPage/filterComponent/FilterComp";
import ContactSection from "@/components/contactSection/ContactSection";

export const metadata = {
  title: "Work",
  description:
    "Welcome to the project page of Brahmbir, a talented and aspiring software developer student. Explore an impressive collection of cutting-edge projects showcasing Brahmbir's passion for technology and innovation. From web applications to mobile apps, each project demonstrates a mastery of programming languages such as Python, Java, and JavaScript. Discover how Brahmbir has leveraged problem-solving skills to create intuitive user experiences and efficient solutions. Dive into the world of software development excellence and witness the future of technology through Brahmbir's dynamic portfolio. Unlock the potential of tomorrow's technology today!",
  alternates: {
    canonical: `${process.env.SITEURL}/work`,
  },
  openGraph: {
    title: "Work Page",
    description:
      "Discover the innovative projects of Brahmbir, a skilled software developer student. Explore web apps, mobile apps, and more, showcasing proficiency in Python, Java, and JavaScript. Experience intuitive user interfaces and efficient solutions. Witness the future of technology in Brahmbir's dynamic portfolio.",
    url: `${process.env.SITEURL}/work`,
    siteName: "brahmbir",
    images: [
      {
        url: `/photos/OpenGraph/work.jpg`,
        type: "image/jpg",
        width: 1365,
        height: 768,
        alt: "Photo of website's Work Page",
      },
    ],
    type: "website",
  },
};

const WorkPage = () => {
  return (
    <>
      <section className={styles.workS}>
        <div className={styles.workIntro}>
          <span>Projects</span>
          <h2>My Work</h2>
          <p>I like to create something powerful, simple, and clean.</p>
        </div>
        <div>
          <FilterComponenet />
        </div>
      </section>
      <ContactSection />
    </>
  );
};
export default WorkPage;
