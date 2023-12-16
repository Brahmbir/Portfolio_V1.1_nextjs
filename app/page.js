import ContactSection from "@/components/contactSection/ContactSection"
import HeroSect from "@/components/heroPage/heroSection/HeroSect"
import AboutSect from "@/components/heroPage/aboutSection/AboutSect"
import WorkSect from "@/components/heroPage/workSection/WorkSect"

import { base } from "@/utils/Airtable";

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
async function getWorkData() {
  const data = await base("tblgok5mwLDBss8j7").select({
      maxRecords: 3, sort: [
          { field: "isHidden", direction: "asc" },
          { field: "created_on", direction: "desc" }
      ]
  }).firstPage()

  return data.map(record => record._rawJson).filter(e => !e.fields.isHidden);
}

export default async function Page() {
  let workdata = await getWorkData().catch(() => "error")
  return (
    <main>
      <HeroSect />
      <AboutSect />
      <WorkSect workdata={workdata} />
      <ContactSection />
    </main>
  )
}
