"use client";
import { AnimatePresence } from "framer-motion";

const AnimateP = ({ children }) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

export default AnimateP;
