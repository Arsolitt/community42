"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import { classNames } from "@/features/helpers/className";
import { NavbarDefault } from "./ui/NavbarDefault/NavbarDefault";
import { NavbarContacts } from "./ui/NavbarContacts/NavbarContacts";
import { NavbarSearchButton } from "./ui/SearchButton/SearchButton";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <motion.div
        key={isShown ? "shown" : "normal"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        {!isShown ? (
          <NavbarDefault openContacts={() => setIsShown(true)} />
        ) : (
          <NavbarContacts closeContacts={() => setIsShown(false)} />
        )}
      </motion.div>
      <NavbarSearchButton />
    </nav>
  );
};
