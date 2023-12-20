"use client"

import { usePathname } from 'next/navigation'
import { motion, useIsPresent } from 'framer-motion'

export default function Wapper({ children }) {

    const isPresent = useIsPresent()
    const pathname = usePathname()

    return (<>
        <motion.div
            className='privacy-screen'
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0, transition: { duration: 0.3, ease: "circOut" } }}
            exit={{ scaleX: 1, transition: { duration: 0.3, ease: "circIn" } }}
            style={{ originX: isPresent ? 0 : 1 }}
            key={pathname} />
        {children}
    </>);

}