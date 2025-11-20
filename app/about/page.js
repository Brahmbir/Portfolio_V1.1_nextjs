import AboutMeInfo from "@/components/aboutPage/aboutMeInfo/AboutMeInfo";
import AboutTop from "@/components/aboutPage/aboutTop/AboutTop";

import ContactSection from "@/components/contactSection/ContactSection";
import { SiteURL } from "../const";

export const metadata = {
  title: "About Me",
  description:
    "Welcome to Brahmbir's Software Developer Portfolio! As an aspiring developer, I showcase my passion for technology and problem-solving. Explore my projects in programming, web development, and software creation. With a strong foundation in computer science, I aim to contribute to innovative projects and embrace cutting-edge technologies. Connect with me for exciting opportunities in software development. Let's code the future together! Contact me for collaborations or more information. Thank you for visiting!",
  alternates: {
    canonical: `${SiteURL}/about`,
  },
  openGraph: {
    title: "About Page",
    description:
      "Welcome to Brahmbir's Software Developer Portfolio! As an aspiring developer, I showcase my passion for technology and problem-solving. Explore my projects in programming, web development, and software creation. With a strong foundation in computer science, I aim to contribute to innovative projects and embrace cutting-edge technologies. Connect with me for exciting opportunities in software development. Let's code the future together! Contact me for collaborations or more information. Thank you for visiting!",
    url: `${SiteURL}/about`,
    siteName: "brahmbir",
    images: [
      {
        url: `/photos/OpenGraph/about.jpg`,
        type: "image/jpg",
        width: 1365,
        height: 768,
        alt: "Photo of website's About Page",
      },
    ],
    type: "website",
  },
};

const AboutPage = () => {
  return (
    <>
      <AboutTop />
      <AboutMeInfo />
      <ContactSection />
    </>
  );
};

export default AboutPage;
