"use client";
import { useEffect, useState, useCallback } from "react";
import { classNames } from "@/features/helpers/className";
import { Logo, LogoTheme } from "@/components/shared/Logo";
import styles from "./header.module.scss";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
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
    <header className={classNames(styles.wrapper, {}, [className])}>
      {scrolled ? (
        <Logo theme={LogoTheme.ANIMATION} />
      ) : (
        <Logo theme={LogoTheme.NORMAL} className="header" />
      )}
    </header>
  );
}
