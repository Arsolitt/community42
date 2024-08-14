import { classNames } from "@/features/helpers/className";
import cls from "./NavbarContacts.module.scss";

interface NavbarContactsProps {
  className?: string;
}

export const NavbarContacts = ({ className }: NavbarContactsProps) => {
  return (
    <nav className={classNames(cls.NavbarContacts, {}, [className])}></nav>
  );
};
