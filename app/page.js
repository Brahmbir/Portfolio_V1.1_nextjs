import ContactSection from "@/components/contactSection/ContactSection"
import HeroSect from "@/components/heroPage/heroSection/HeroSect"
import AboutSect from "@/components/heroPage/aboutSection/AboutSect"
import WorkSect from "@/components/heroPage/workSection/WorkSect"

export const metadata = {
  title: {
      template: '%s | Brahmbir',
      default: 'Brahmbir'
  },
  colorScheme: 'dark',
  creator: 'Brahmbir Singh',
  category: 'technology',
  themeColor: 'black',
  icons: {
      icon: '/logo.svg',
  },
  robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
          index: true,
          follow: true,
          archive: false,
          noimageindex: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
      },
  }
}

export default function Page() {
  return (
    <main>
      <HeroSect />
      <AboutSect />
      <WorkSect />
      <ContactSection />
    </main>
  )
}
