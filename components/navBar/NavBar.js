"use client"

import styles from "./navBar.module.css"

import Logo from '@/components/logo/Logo';
import TogleButton from "./comps/TogleButton";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from "framer-motion";

let allLinks = [
    {
        name: "Home",
        href: "/"
    }, {
        name: "About",
        href: "/about"
    }, {
        name: "Work",
        href: "/work"
    }, {
        name: "Contact",
        href: "/contact"
    }
]

export default function NavBar() {

    const pathName = usePathname();

    const setfalse = () => {
        document.querySelector("#CB").setAttribute("data-show", false)
        document.querySelector("#Hlink").setAttribute("data-visi", false);
        document.getElementById("Layer_2").style.transform = "translateX(44px) translateY(-36px) rotateY(180deg)";
        document.getElementById("Layer_1").style.transform = "translateX(0px)";
    }
    return (
        <div className={styles.topBar}>
            <Logo />
            <TogleButton />
            <nav className={styles.navMenu}>
                <ul data-visi="false" id="Hlink" className={styles.link}>
                    <AnimatePresence
                        // mode='wait' 
                        initial={false}>
                        {allLinks.map((link, i) => {
                            return (
                                <li key={link.name + i}>
                                    <Link
                                        style={{ position: "relative" }}
                                        onClick={() => setfalse()}
                                        href={link.href}>
                                        {link.name}
                                        <span className={styles.NavH}></span>
                                        {(pathName == link.href || (pathName.startsWith("/work/") && link.href == "/work")) &&
                                            (<motion.span className={styles.UnderLine} layoutId="underline" >◡</motion.span>)}
                                    </Link>
                                </li>
                            )
                        })}
                    </AnimatePresence >
                </ul>
            </nav>
        </div >
    );
}