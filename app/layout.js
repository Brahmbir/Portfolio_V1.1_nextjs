import NavBar from "@/components/navBar/NavBar";
import ChatComponent from "@/components/chatBox/ChatBox";
import "./globals.css";
import AnimateP from "@/components/animateP";
import { SiteURL } from "./const";

export const metadata = {
  title: {
    template: "%s | Brahmbir",
    default: "Brahmbir",
  },
  metadataBase: new URL(SiteURL),
  creator: "Brahmbir Singh",
  category: "technology",
  icons: {
    icon: "/logo.svg",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export const viewport = {
  themeColor: "black",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "black" }],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "dark",
  themeColor: "black",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>
          <ChatComponent />
          <AnimateP>{children}</AnimateP>
        </main>
      </body>
    </html>
  );
}
