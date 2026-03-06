'use client';

import { classNames } from '@features/helpers/className';

import { NavbarSearchButton } from './SearchButton/SearchButton';

import cls from './Navbar.module.css';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.navbar_wrapper}>
        <button className={cls.navbar_button}>Button 1</button>
        <button className={cls.navbar_button}>Button 2</button>
      </div>
      <NavbarSearchButton />
    </nav>
  );
};
