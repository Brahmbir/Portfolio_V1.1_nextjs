import ContactBox from "@/components/contactPage/contactBox/ContactBox";
import ContactHero from "@/components/contactPage/contactHero/ContactHero";
import ContactForm from "@/components/contactPage/contactForm/ContactForm";
import Footer from "@/components/contactComponent/footer/Footer";

export const metadata = {
  title: "Contant",
  description:
    "Connect with a passionate and skilled software developer student through our contact page. Aspiring to build innovative solutions and seeking opportunities for collaboration, I am eager to hear about exciting projects or discuss potential partnerships. Let's explore how my programming expertise and problem-solving abilities can contribute to your vision. Reach out now and let's create something extraordinary together!",
  alternates: {
    canonical: `${process.env.SITEURL}/contant`,
  },
  openGraph: {
    title: "Contact Page",
    description:
      "Get in touch with a talented software developer student for exciting projects and collaborations. Let's bring your ideas to life with innovative solutions. Contact me now!",
    url: `${process.env.SITEURL}/contant`,
    siteName: "brahmbir",
    images: [
      {
        url: `/photos/OpenGraph/contact.jpg`,
        type: "image/jpg",
        width: 1365,
        height: 768,
        alt: "Photo of website's Contact Page",
      },
    ],
    type: "website",
  },
};

const ContactPaga = () => {
  return (
    <ContactBox>
      <ContactHero />
      <ContactForm />
      <Footer />
    </ContactBox>
  );
};
export default ContactPaga;
