"use client";

import styles from "./navBar.module.css";
import Logo from "@/components/logo/Logo";
import ToggleButton from "./comps/TogleButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const isSmallScreen = useIsSmallScreen(550);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    document.querySelector("#CB").setAttribute("data-show", false);
    setMenuOpen(false);
  };

  const isActive = (href) =>
    pathname === href || (pathname.startsWith("/work/") && href === "/work");

  const MenuContent = (
    <>
      {LINKS.map((link) => (
        <li key={link.href}>
          <Link href={link.href} onClick={closeMenu} className={styles.navLink}>
            {link.name}
            <span className={styles.NavH}></span>
            {!isSmallScreen && isActive(link.href) && (
              <motion.span layoutId="underline" className={styles.UnderLine}>
                ◡
              </motion.span>
            )}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <header className={styles.topBar}>
      <Logo />
      <ToggleButton
        isOpen={menuOpen}
        onToggle={() => {
          document.querySelector("#CB").setAttribute("data-show", false);
          setMenuOpen((v) => !v);
        }}
      />

      <nav className={styles.navMenu}>
        {/* DESKTOP: Animated */}
        {!isSmallScreen && (
          <AnimatePresence>
            {<ul className={styles.link}>{MenuContent}</ul>}
          </AnimatePresence>
        )}

        {/* MOBILE: Static */}
        {isSmallScreen && menuOpen && (
          <motion.ul
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 0.25 }}
            data-visi={menuOpen}
            id="Hlink"
            className={styles.link}
          >
            {MenuContent}
          </motion.ul>
        )}
      </nav>
    </header>
  );
}

export function useIsSmallScreen(breakpoint = 768) {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => {
      console.log("isSmallScreen updated:", mq.matches);
      setIsSmall(mq.matches);
    };

    update();
    mq.addEventListener("change", update);

    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isSmall;
}
