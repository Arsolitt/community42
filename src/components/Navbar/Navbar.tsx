"use client";
import { useState } from "react";

import { classNames } from "@features/helpers/className";

import { NavbarContacts } from "./NavbarContacts/NavbarContacts";
import { NavbarDefault } from "./NavbarDefault/NavbarDefault";
import { NavbarSearchButton } from "./SearchButton/SearchButton";

import cls from "./Navbar.module.css";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      {!isShown ? (
        <NavbarDefault className={cls.navbar_wrapper} openContacts={() => setIsShown(true)} />
      ) : (
        <NavbarContacts className={cls.navbar_wrapper} closeContacts={() => setIsShown(false)} />
      )}
      <NavbarSearchButton />
    </nav>
  );
};
