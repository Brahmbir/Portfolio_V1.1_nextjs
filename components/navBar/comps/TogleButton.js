"use client";

import styles from "./togleButton.module.css";
import { BiArrowBack } from "react-icons/bi";
import { RiMenuUnfoldLine } from "react-icons/ri";

const ToggleButton = ({ isOpen, onToggle, onCloseChat }) => {
  const handleClick = () => {
    if (!isOpen && onCloseChat) {
      onCloseChat();
    }
    onToggle();
  };

  return (
    <button
      onClick={handleClick}
      aria-expanded={isOpen}
      className={styles.nav_but}
    >
      {/* Hamburger */}
      <span
        className={styles.icon}
        style={{
          transform: isOpen ? "translateX(-44px)" : "translateX(0)",
          opacity: isOpen ? 0 : 1,
        }}
      >
        <RiMenuUnfoldLine className={styles.threebar} />
      </span>

      {/* Back Arrow */}
      <span
        className={styles.icon}
        style={{
          transform: isOpen
            ? "translateX(0) rotateY(180deg)"
            : "translateX(44px) rotateY(180deg)",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <BiArrowBack className={styles.backarro} />
      </span>
    </button>
  );
};

export default ToggleButton;
