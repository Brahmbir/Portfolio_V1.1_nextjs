import ContactSection from "@/components/contactSection/ContactSection";
import HeroSect from "@/components/heroPage/heroSection/HeroSect";
import AboutSect from "@/components/heroPage/aboutSection/AboutSect";
import WorkSect from "@/components/heroPage/workSection/WorkSect";

export const metadata = {
  description:
    "Welcome to our Software Developer Student Site - Your Ultimate Resource for Aspiring Developers! Join a vibrant community of tech enthusiasts, where we share cutting-edge programming tutorials, industry insights, and career guidance. Enhance your coding skills with hands-on projects, and explore the latest trends in software development. Whether you're a beginner or an advanced coder, our comprehensive content caters to all levels. Start your journey towards becoming a proficient software developer today!",
  alternates: {
    canonical: process.env.SITEURL,
  },
  openGraph: {
    title: "Brahmbir",
    description:
      "Discover Brahmbir's Software Developer Portfolio | Unleash Innovation & Expertise. Explore web & mobile projects, ML, data analysis & more. Join a visionary in shaping the digital future.",
    url: process.env.SITEURL,
    siteName: "Brahmbir",
    images: [
      {
        url: `/photos/OpenGraph/home.jpg`,
        type: "image/jpg",
        width: 1365,
        height: 768,
        alt: "Picture of website main page",
      },
    ],
    type: "website",
  },
};

const HomePage = () => {
  return (
    <>
      <HeroSect />
      <AboutSect />
      <WorkSect />
      <ContactSection />
    </>
  );
};

export default HomePage;
