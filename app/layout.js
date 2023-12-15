// import { Roboto_Mono } from 'next/font/google'
import NavBar from '@/components/navBar/NavBar'
import ChatComponent from '@/components/chatBox/ChatBox'
import './globals.css'

// const inter = Roboto_Mono({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <NavBar/>
        {children}
        <ChatComponent/>
        </body>
    </html>
  )
}
