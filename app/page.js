import ContactSection from "@/components/contactSection/ContactSection"
import HeroSect from "@/components/heroPage/heroSection/HeroSect"
import AboutSect from "@/components/heroPage/aboutSection/AboutSect"
import WorkSect from "@/components/heroPage/workSection/WorkSect"

import { getXataClient } from "@/utils/xata";

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

const xata = getXataClient();

async function getWorkData(){
    const data = await xata.db.AllWorkTable.select([
        "Tittle",
        "Tags",
        "Description",
        "Image",
        "ProjectTableLink.id",
      ]).filter({isHidden:false}).sort("createData",'desc').getMany({pagination: { size: 2 }})
        return data;
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
