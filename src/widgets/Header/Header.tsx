"use client";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

import { classNames } from "@/features/helpers/className";
import { Logo, LogoTheme } from "@/shared/ui/Logo";
import styles from "./header.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={classNames(
        scrolled ? styles.wrapperAnimated : styles.wrapper,
        {},
        [className],
      )}
    >
      <motion.div
        key={scrolled ? "scrolled" : "normal"}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.25 }}
      >
        <Logo theme={scrolled ? LogoTheme.ANIMATION : LogoTheme.NORMAL} />
      </motion.div>
    </header>
  );
};
