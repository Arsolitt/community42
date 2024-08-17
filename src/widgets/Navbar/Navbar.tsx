"use client";
import { useState } from "react";

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
      {!isShown ? (
        <NavbarDefault openContacts={() => setIsShown(true)} />
      ) : (
        <NavbarContacts closeContacts={() => setIsShown(false)} />
      )}
      <NavbarSearchButton />
    </nav>
  );
};
